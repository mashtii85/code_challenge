import type { AppProps } from 'next/app'
import { AppProvider, AuthenticateProvider } from '../components'

function MyApp({ Component, pageProps }: AppProps) {

  return (
  <AppProvider>
     <AuthenticateProvider>
      <Component {...pageProps} />
    </AuthenticateProvider>
   </AppProvider>)
}

export default MyApp
