import { Dispatch } from 'react'
import { IMessage } from '../../../../config'
import { ICredentialResModel, ICredentialReqModel } from '../models'

export interface IAuthorizeAction<T> {
  type: ActionType
  payload?: T
}
export interface IAuthorizeState {
  currentState: ActionType
  token?: ICredentialResModel
  loading?: boolean
  message?: IMessage[]
  userCredentials?: ICredentialReqModel
  curentUserId?: number
  isAdmin: boolean
}
export interface IAuthorizeContextProps {
  isAuthenticated: boolean
  state: IAuthorizeState
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<IAuthorizeAction<any>>
}
export enum ActionType {
  UNINITIALIZED = 'UNINITIALIZED',
  GET_TOKEN = 'GET_TOKEN',
  AUTHORIZED = 'AUTHORIZED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  LOADING = 'LOADING',
  SIGN_OUT = 'SIGN_OUT',
  FORGET_PASSWORD = 'FORGET_PASSWORD',
  CLEAR_MESSAGES = 'CLEAR_MESSAGES',
}
