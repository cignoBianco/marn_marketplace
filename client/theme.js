import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
      h2: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 38,
        letterSpacing: 0.15000000596046448,
        textAlign: 'left'
      }
  },
  palette: {
    primary: {
      light: '#F6F4F3',
      main: '#276FBF',
      dark: '#183059',
      contrastText: '#fff',
      accent: '#B0CB1F',
      accentHover: 'lightgreen',
      text: '#2C2738'
    },
    secondary: {
      light: '#F36874',
      main: '#F03A47',
      dark: '#B42C36',
      contrastText: '#000',
      text: '#797979',
    },
      openTitle: '#335B98',
      protectedTitle: pink['400'],
      type: 'light',
  },
  basic: {
    borderRadius: 8,
    outerMargins: '6em',
    lightPadding: '1em',
  },
  bold: {
    fontWeight: 700
  }
})

export default theme