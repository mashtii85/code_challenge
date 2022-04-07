import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider, AuthenticateProvider } from '../src/components'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <AppProvider>
     <AuthenticateProvider>
      <Component {...pageProps} />
    </AuthenticateProvider>
   </AppProvider>)
}

export default MyApp
