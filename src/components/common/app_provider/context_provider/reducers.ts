import { ActionType, IAppAction, IAppState } from './variables'
import { loading, uninitialized, initialized } from './actions'

export const appReducer = (state: IAppState, action: IAppAction): IAppState => {
  switch (action.type) {
    case ActionType.UNINITIALIZED:
      return uninitialized(state)
    case ActionType.LOADED:
      return initialized(state)
    default:
      return loading(state, action)
    //   throw new Error()
  }
}
