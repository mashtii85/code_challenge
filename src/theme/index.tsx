import {
  MuiThemeProvider,
  createMuiTheme,
  //responsiveFontSizes,
} from '@mui/material'
import colors from '../config/colors.json'
import React from 'react'
const theme = createMuiTheme({
  spacing: 10,
  palette: {
    secondary: {
      main: '#d20e42',
    },
    primary: {
      main: '#149346',
      light: '#149346',
      dark: '#149346',
    },
  },
  typography: {
    fontFamily: 'ir, Tahoma',
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '5px!important',
      },
    },
    MuiCheckbox: {
      root: {
        padding: 2,
        color: '#27ae60!important ',
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: 'black!important',
      },
    },
    MuiButton: {
      root: {
        fontSize: '0.875rem!important',
      },
    },
    MuiSelect: {
      icon: {
        position: 'unset',
        color: '#c4c4c4',
      },
      outlined: {
        backgroundColor: 'transparent!important',
      },
    },
    MuiFilledInput: {
      input: {
        paddingTop: 12,
      },
      root: {
        '&:hover': {
          backgroundColor: 'white!important',
        },
        '&.Mui-focused': {
          backgroundColor: 'white!important',
        },
      },
    },
    MuiSvgIcon: {
      //root: { fill: 'white', backgroundColor: 'white' },
    },
    MuiInputBase: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiTooltip: {
      tooltip: {
        maxWidth: 'unset!important',
      },
    },

    MuiTable: {
      root: {
        borderCollapse: 'initial',
        borderSpacing: '0 5px',
      },
    },
    MuiTablePagination: {
      root: {
        color: 'black !important',
      },
      selectRoot: {
        display: 'none',
      },
    },
    MuiTableRow: {
      root: {
        height: 36,
        backgroundColor: 'white',
        border: '0px solid #f0f0f0 !important',
        '&:hover': {
          boxShadow: '0px 4px 27px rgba(0,0,0,0.25)',
          backgroundColor: '#eef6f1!important',
          height: 46,
        },
        '&:hover td': {
          borderStyle: 'solid',
          borderColor: '#30a57c !important',
          borderWidth: '1px 0 1px 0',
        },
        '&:hover :first-child': {
          borderWidth: '1px 1px 1px 0 !important',
          borderRadius: '0 5px 5px 0',
        },
        '&:hover :last-child': {
          borderWidth: '1px 0 1px 1px',
          borderRadius: '5px 0 0 5px',
        },
      },
      footer: {
        height: 'unset',
        backgroundColor: 'transparent',
        color: 'black!important',
        '&:hover': {
          border: 'none!important',
          backgroundColor: 'transparent!important',
          boxShadow: 'none',
        },
      },
      head: {
        '&:hover': {
          height: 36,
          boxShadow: 'none',
        },
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#d1d1d1',
        height: 36,
        border: '1px solid #f0f0f0',
        borderRadius: 10,
      },
    },
    MuiTableCell: {
      alignLeft: {
        textAlign: 'right',
      },
      head: {
        zIndex: 0,
        color: '#555555!important',
        backgroundColor: '#d1d1d1!important',
        padding: 3,
        paddingRight: 10,
        borderLeft: '1px solid #afafaf',
        height: 36,
        borderImage:
          'linear-gradient(to bottom, transparent, #afafaf, transparent) 1',
        '&:first-child': {
          border: 'none',
          borderRight: '0px solid #f0f0f0',
          borderRadius: '0 5px 5px 0',
        },
        '&:last-child': {
          borderLeft: '0px solid #f0f0f0',
          borderRadius: '5px 0 0 5px',
        },
        '&:hover': {
          height: 36,
          boxShadow: 'none',
        },
      },
      root: {
        color: '#5e5a5a!important',
        height: 36,
        userSelect: 'none',
        padding: '5px',
        whiteSpace: 'nowrap',
        borderTop: '0px solid #d9dcde',
        borderBottom: '0px solid #d9dcde',
        '&:hover': {
          borderColor: '#30a57c',
        },
        '&:first-child': {
          borderRadius: '0 5px 5px 0',
          borderTop: '1px solid transparent',
          borderRight: '1px solid transparent',
          borderBottom: '1px solid transparent',
        },
        '&:last-child': {
          borderLeft: '1px solid transparent',
          borderTop: '1px solid transparent',
          borderBottom: '1px solid transparent',
          borderRadius: '5px 0 0 5px',
        },
      },
      footer: {
        border: 'none!important',
        height: 'unset',
        '&:hover': {
          // borderColor: 'transparent',
          // border: 'none!important',
        },
      },
    },
    MuiGrid: {
      item: {
        fontSize: '.75rem!important',
      },
    },
    MuiInputLabel: {
      formControl: {
        textAlign: 'right',
        left: 'unset',
        right: '17px',
      },
    },
    MuiInputAdornment: {
      positionEnd: {
        marginRight: 8,
      },
    },
    MuiTab: {
      root: {
        marginLeft: '0!important',
        minWidth: '60px!important',
        maxWidth: '60px!important',
        backgroundColor: 'white!important',
      },
    },
    MuiTabs: {
      root: {
        direction: 'ltr',
        backgroundColor: 'rgb(240,240,240)!important',
        width: '60px',
        float: 'left',
      },
      indicator: {
        left: '0px!important',
      },
    },

    MuiDivider: {
      root: {
        backgroundColor: colors.secondary,
      },
    },
    MuiFormHelperText: {
      root: {
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        textAlign: 'right',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        fontSize: '0.8rem!important',
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '100%',
      },
      root: {
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        textAlign: 'right',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

        typography: {
          fontFamily: 'ir, Tahoma',
          // fontSize: '24',
          // '@media(min-width:600px)': {
          //   fontSize: 8,
          // },
          // '@media(min-width:800px)': {
          //   fontSize: 12,
          // },
        },

        overrides: {
          MuiInputLabel: {
            formControl: {
              textAlign: 'right',
              left: '',
              right: 10,
            },
          },
          input: {
            color: 'white',
            backgroundColor: 'blue',
          },
          MuiTab: {
            root: {
              marginLeft: '0!important',
              minWidth: '60px!important',
              maxWidth: '60px!important',
              backgroundColor: 'white!important',
            },
          },
          MuiTabs: {
            root: {
              direction: 'ltr',
              backgroundColor: 'rgb(240,240,240)!important',
              width: '60px',
              float: 'left',
            },
            indicator: {
              left: '0px!important',
            },
          },
          MuiDivider: {
            root: {
              backgroundColor: colors.text,
            },
          },
          MuiFormHelperText: {
            root: {
              justifyContent: 'flex-start',
              justifyItems: 'flex-start',
              textAlign: 'right',
              alignItems: 'flex-start',
              alignSelf: 'flex-start',
            },
          },
          MuiFormControlLabel: {
            root: {
              justifyContent: 'flex-start',
              justifyItems: 'flex-start',
              textAlign: 'right',
              alignItems: 'flex-start',
              alignSelf: 'flex-start',
            },
            label: {
              fontSize: '1.25rem',
            },
          },

          MuiCheckbox: {
            root: {
              '&$checked': {},
            },
          },
        },
      },
    },
  },
})

interface ThemeProviderProps {
  children: React.ReactElement
}

const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement[]
}): JSX.Element => {
  // theme = responsiveFontSizes(theme)
  theme.typography.caption = {
    fontFamily: 'ir, Tahoma',
    fontSize: '.7rem',
    '@media(min-width:600px)': {
      fontSize: '.4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '.9rem',
    },
  }
  theme.typography.button = {
    fontFamily: 'ir, Tahoma',
    fontSize: '.4rem',
    '@media(min-width:600px)': {
      fontSize: '.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  }
  theme.typography.h1 = {
    //HeadLine
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    [theme.breakpoints.between('sm', 'xl')]: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.375rem',
      fontWeight: 500,
    },
  }
  theme.typography.subtitle1 = {
    //SubHeading
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    [theme.breakpoints.between('sm', 'xl')]: {
      fontSize: '0.75rem',
      fontWeight: 700,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  }
  theme.typography.body1 = {
    //Body
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.between('sm', 'xl')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.125rem',
    },
  }
  theme.typography.caption = {
    // Caption
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.between('sm', 'xl')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '0.875rem',
    },
  }
  // theme.typography. = {
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: 24,
  //   },
  // }
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
