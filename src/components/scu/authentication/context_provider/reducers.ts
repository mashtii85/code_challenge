import { ActionType, IAuthorizeAction, IAuthorizeState } from './variables'
import {
  authorized,
  getToken,
  uninitialized,
  unauthorized,
  signOut,
  forgetPasswordAction,
  clearMessage,
} from './actions'

export const authorizeReducer = (
  state: IAuthorizeState,
  action: IAuthorizeAction<any>,
): IAuthorizeState => {
  switch (action.type) {
    case ActionType.UNINITIALIZED:
      return uninitialized(state)
    case ActionType.GET_TOKEN:
      return getToken(state, action)
    case ActionType.AUTHORIZED:
      return authorized(state, action)
    case ActionType.UNAUTHORIZED:
      return unauthorized(state, action)
    case ActionType.SIGN_OUT:
      return signOut(state)
    case ActionType.LOADING:
      return { ...state, loading: true }
    case ActionType.FORGET_PASSWORD:
      return forgetPasswordAction(state, action)
    case ActionType.CLEAR_MESSAGES:
      return clearMessage(state, action)
    default:
      throw new Error()
  }
}
