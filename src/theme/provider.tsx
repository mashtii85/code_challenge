import styledComponents, { ThemeProvider } from 'styled-components'

// theme.ts
// your theme variables
export interface IThemeInterface {
  primary: string
  componentBackground: string
  componentBackgroundSecondary: string
}

const theme = {
  main: "mediumseagreen",
  COLOR:{
    primary:"green",
    secondary:"blue"
  }
};

export const StyledThemeProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
