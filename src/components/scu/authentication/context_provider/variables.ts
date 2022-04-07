import { Dispatch } from 'react'
import { ICredentialResModel, ICredentialReqModel } from '../models'
import { IMessage } from '@config'

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
export enum Posts {
  VISITOR = 1,
  INVENTORY_MAN = 2,
  HUMAN_RESOURCE_MANAGER = 3,
  CEO = 4,
  QCManager = 5,
  SUManager = 6,
  FinancialManager = 7,
  Collector = 8,
  SaleManager = 9,
  Driver = 10,
  Responsible = 11,
  Employee = 12,
  Distributer = 13,
  SignOwner = 15,
  Cashier = 16,
  InventoryAccountant = 17,
  InventoryManager = 50,
  AssetManager = 51,
  Daroox_Admin = 99,
}
