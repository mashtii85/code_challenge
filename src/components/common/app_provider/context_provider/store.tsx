import React, { createContext, useEffect } from 'react'
import useReducerWithSideEffects from 'use-reducer-with-side-effects'
import { appReducer } from './reducers'
import { ActionType, IAppContextProps, IAppState } from './variables'
import { ToastContainer, Flip } from 'react-toastify'

export const appInitState: IAppState = {
  loading: false,
  currentState: ActionType.UNINITIALIZED,
}
const store = createContext({} as IAppContextProps)
const { Provider } = store

function AppProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [state, dispatch] = useReducerWithSideEffects(appReducer, appInitState)
  const Toast = () => (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={true}
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
    />
  )
  useEffect(() => {
    dispatch({ type: ActionType.UNINITIALIZED })
  }, [])

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      <>
        <Toast />
        {children}
      </>
    </Provider>
  )
}

export { store, AppProvider }
