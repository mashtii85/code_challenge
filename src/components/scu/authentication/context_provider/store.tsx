import React, { createContext, useEffect } from 'react'
import useReducerWithSideEffects from 'use-reducer-with-side-effects'
import { authorizeReducer } from './reducers'


import { useRouter } from 'next/router'

import {
  ActionType,
  IAuthorizeContextProps,
  IAuthorizeState,
} from './variables'
import { isUnprotected } from '../config/unprotected_pages'
import { Loading } from '../../../common'
import { navigation } from '../../../../config'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'


export const authorizeInitState: IAuthorizeState = {
  token: null,
  loading: false,
  currentState: ActionType.UNINITIALIZED,
  message: [],
}

const store = createContext({} as IAuthorizeContextProps)
const { Provider } = store
// const { state } = useContext(store)
function AuthenticateProvider({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  const router = useRouter()
  const [state, dispatch] = useReducerWithSideEffects(
    authorizeReducer,
    authorizeInitState,
  )
  useEffect(() => {
    dispatch({ type: ActionType.UNINITIALIZED })
  }, [])

  const handleLogout = () => {
    dispatch({ type: ActionType.SIGN_OUT })
  }

  const switchRenderer = (currentState: ActionType) => {

    switch (currentState) {
      case ActionType.LOADING:
        return <Loading />
      case ActionType.AUTHORIZED:
        if (router.pathname === navigation.authenticate.login) {
          const routeHistory = window.history.state.options.redirect
          const routeName =
            routeHistory && routeHistory.length > 0
              ? routeHistory
              : navigation.home
          router.replace(routeName)
          return <Loading />
        }
        return <>
          <AppBar>
            <Toolbar>
              <Button color="inherit" onClick={handleLogout} >Logout</Button>
            </Toolbar>
          </AppBar>
          {children}</>
      case ActionType.UNAUTHORIZED:
        if (isUnprotected(router.asPath)) {
          return <>{children}</>
        }
        router.replace(
          navigation.authenticate.login,
          navigation.authenticate.login,
          {
            redirect: window.history.state.as,
          },
        )
        return <Loading />
      default:
        return <Loading />
    }
  }

  return (
    <Provider
      value={{
        state,
        dispatch,
        isAuthenticated: !state.currentState.AUTHORIZED,
      }}
    >
      {switchRenderer(state.currentState)}

    </Provider>
  )
}

export { store, AuthenticateProvider }
