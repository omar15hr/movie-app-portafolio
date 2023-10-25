import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    error: {
      main: red.A400
    }
  }
})
