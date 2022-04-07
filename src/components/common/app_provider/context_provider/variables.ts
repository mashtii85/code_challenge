import { Dispatch } from 'react'

export interface IAppAction {
  type: ActionType
}
export interface IAppState {
  currentState: ActionType
  loading?: boolean
  message?: string
}
export interface IAppContextProps {
  state: IAppState
  dispatch: Dispatch<IAppAction>
}
export enum ActionType {
  UNINITIALIZED = 'UNINITIALIZED',
  LOADED = 'LOADED',
  LOADING = 'LOADING',
}
