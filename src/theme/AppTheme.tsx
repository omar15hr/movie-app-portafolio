import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { colorTheme } from './'

export function AppTheme ({ children }: any) {

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}
