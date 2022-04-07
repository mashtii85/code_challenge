import React from 'react'
import { LayoutProvider } from '../components/common/app/layout'
import ThemeProvider from '../theme'
import { CssBaseline } from '@mui/material'
import Router from 'next/router'
import NProgress from '../components/common/nprogress/nprogress'
import { AuthenticateProvider } from '../components/scu/authentication/context_provider/store'
import { AppProvider } from '@common'
import { appWithTranslation } from '../i18n'
// import fetch from 'isomorphic-unfetch'
import 'react-toastify/dist/ReactToastify.css'
// import getConfig from 'next/config'
import Head from 'next/head'
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider>
      <Head>
        <title>داروکس</title>
      </Head>
      <CssBaseline />
      <AppProvider>
        <AuthenticateProvider>
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </AuthenticateProvider>
      </AppProvider>
    </ThemeProvider>
  )
}
// const { publicRuntimeConfig } = getConfig()
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  // const a = await publicRuntimeConfig.API_URL
  // const url = `${a}/navigations`
  // const res = await fetch(url)
  // const navigation = await res.json()
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return {
    // navigation,
    pageProps,
  }
}
// MyApp.getInitialProps = async (appContext) => {
//   return { ...await MyApp.getInitialProps(appContext) }
// }
export default appWithTranslation(MyApp)
