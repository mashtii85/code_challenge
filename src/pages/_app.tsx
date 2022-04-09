import type { AppProps } from 'next/app'
import { AppProvider, AuthenticateProvider } from '../components'
import { StyledThemeProvider } from '../theme/provider'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StyledThemeProvider>
      <AppProvider>
        <AuthenticateProvider>
          <Component {...pageProps} />
        </AuthenticateProvider>
      </AppProvider>
    </StyledThemeProvider>)
}

export default MyApp
