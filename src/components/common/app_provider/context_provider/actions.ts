import { Update, UpdateWithSideEffect } from 'use-reducer-with-side-effects'
import { ActionType, IAppAction, IAppState } from './variables'
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const uninitialized = (state: IAppState): IAppState => {
  return UpdateWithSideEffect(
    { ...state, loading: true },
    async (state, dispatch) => {
      await delay(3000)
      dispatch({ type: ActionType.LOADED })
    },
  )
}

export const initialized = (state: IAppState): IAppState => {
  return Update({
    ...state,
    loading: false,
    currentState: ActionType.LOADED,
  })
}
export const loading = (state: IAppState, action: IAppAction): IAppState => {
  return Update({
    ...state,
    loading: false,
    currentState: action.type,
  })
}
