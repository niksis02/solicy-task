import { green } from '@material-ui/core/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: green
  },
  typography: {
    fontFamily: 'montserrat',
    button: {
      color: 'black !important'
    }
  }
})
