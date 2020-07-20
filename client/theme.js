import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#ffb266',
      main: '#ff8a16',
      dark: '#d96c00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#ffc000',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })

  export default theme