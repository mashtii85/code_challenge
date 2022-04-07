import { Update, UpdateWithSideEffect } from 'use-reducer-with-side-effects'
import LoginService from '../login/serivce'
import {
  ActionType,
  IAuthorizeAction,
  IAuthorizeState,
  Posts,
} from './variables'
import { ICredentialResModel, ICredentialReqModel } from '../models'
import { IMessage, LocalStorageTypes, MessageType } from '../../../../config'

const service = new LoginService()
export const getToken = (
  state: IAuthorizeState,
  action: IAuthorizeAction<ICredentialReqModel>,
): IAuthorizeState =>
  UpdateWithSideEffect(
    { ...state, loading: true },
    async (state: IAuthorizeState, dispatch) => {
      const response = await service.login(action.payload)
      if (response.access_token) {
        decodeToken(response.access_token)

        action.payload.remember
          ? localStorage.setItem(
              LocalStorageTypes.REMEMBER_ME,
              JSON.stringify(action.payload),
            )
          : localStorage.removeItem(LocalStorageTypes.REMEMBER_ME)
        dispatch({
          type: ActionType.AUTHORIZED,
          payload: response,
        })
      } else {
        const message: IMessage = {
          text: 'نام کاربری یا کلمه عبور اشتباه است.  ',
          type: MessageType.FAILURE,
        }
        // Update({
        //   ...state,
        //   currentState: action.type,
        //   message: [message],
        // })
        // showMessages([message])
        dispatch({
          type: ActionType.UNAUTHORIZED,
          payload:
            'نام کاربری یا کلمه عبور اشتباه است.  ' +
            new Date().toLocaleTimeString(),
        })
      }
    },
  )
export const clearMessage = (
  state: IAuthorizeState,
  action: IAuthorizeAction<ICredentialReqModel>,
): IAuthorizeState =>
  Update({
    ...state,
    currentState: action.type,
    message: [],
  })

export const decodeToken = (token: string): void => {
  const base64Url = token.split('.')[1]
  if (base64Url) {
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const decoded = JSON.parse(window.atob(base64))
    localStorage.setItem(LocalStorageTypes.USERID, decoded.ScuUserId)
    localStorage.setItem(LocalStorageTypes.USERNAME, decoded.ScuUserName)
    localStorage.setItem(LocalStorageTypes.POSTS, decoded.Posts)
  }
}
export const forgetPasswordAction = (
  state: IAuthorizeState,
  action: IAuthorizeAction<string>,
): IAuthorizeState =>
  UpdateWithSideEffect(
    { ...state, loading: true },
    async (state: IAuthorizeState) => {
      const response = await service.forgetPassword(action.payload)
      if (response.success) {
        const message: IMessage = {
          text: 'کلمه عبور به ایمیل شما ارسال شد',
          type: MessageType.SUCCESS,
        }
        showMessages([message])
      } else {
        showMessages(response.message)
      }

      Update({
        ...state,
        loading: false,
        currentState: action.type,
      })
    },
  )
// export const forgetPasswordSuccess = (
//   state: IAuthorizeState,
//   action: IAuthorizeAction<null>,
// ): IAuthorizeState =>

export const authorized = (
  state: IAuthorizeState,
  action: IAuthorizeAction<string>,
): IAuthorizeState => {
  localStorage.setItem(LocalStorageTypes.JWT, JSON.stringify(action.payload))
  return Update({
    ...state,
    loading: false,
    token: action.payload,
    currentState: action.type,
    curentUserId: localStorage.getItem(LocalStorageTypes.USERID),
    isAdmin: CheckAccessPost(Posts.Daroox_Admin),
  })
}
export const unauthorized = (
  state: IAuthorizeState,

  action: IAuthorizeAction<string>,
): IAuthorizeState => {
  const jsonCredentials = localStorage.getItem(LocalStorageTypes.REMEMBER_ME)
  let credentials: ICredentialReqModel = {
    username: '',
    password: '',
    remember: false,
    grant_type: 'password',
  }
  if (jsonCredentials != 'undefined') {
    credentials = JSON.parse(jsonCredentials)
  }
  return Update({
    ...state,
    loading: false,
    currentState: action.type,
    message: action.payload,
    userCredentials: credentials,
  })
}
const getTokenFromLocalStorage = (): ICredentialResModel | undefined => {
  const jsonResponse = localStorage.getItem(LocalStorageTypes.JWT)
  if (
    jsonResponse != null &&
    jsonResponse.length > 0 &&
    jsonResponse != 'undefined'
  ) {
    const response: ICredentialResModel = JSON.parse(jsonResponse)
    return response
  } else {
    return undefined
  }
}
export const uninitialized = (state: IAuthorizeState): IAuthorizeState =>
  UpdateWithSideEffect({ ...state, loading: true }, async (state, dispatch) => {
    const response = getTokenFromLocalStorage()
    if (response) {
      dispatch({
        type: ActionType.AUTHORIZED,
        payload: response,
      })
    } else {
      dispatch({
        type: ActionType.UNAUTHORIZED,
        payload: response && response.message,
      })
    }
  })

export const signOut = (state: IAuthorizeState): IAuthorizeState => {
  localStorage.removeItem(LocalStorageTypes.JWT)
  localStorage.removeItem(LocalStorageTypes.USERNAME)
  localStorage.removeItem(LocalStorageTypes.USERID)
  localStorage.removeItem(LocalStorageTypes.CATEGORIZED_COMPANY)
  localStorage.removeItem(LocalStorageTypes.POSTS)
  localStorage.removeItem(LocalStorageTypes.REMEMBER_ME)
  return UpdateWithSideEffect(
    {
      ...state,
      token: null,
      currentState: ActionType.UNAUTHORIZED,
      loading: true,
    },
    (state, dispatch) =>
      dispatch({
        type: ActionType.UNAUTHORIZED,
      }),
  )
}

export const CheckAccessPost = (Type: Posts): boolean => {
  const Posts: string = window.localStorage.getItem('Posts')
  if (Posts) {
    const ListPost: string[] = Posts.split(',')
    const Index = ListPost.findIndex(function (e) {
      return e == Type.toString()
    })
    return Index > 0
  }
  return false
}
