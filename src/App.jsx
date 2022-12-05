import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import { Router } from './router'
import { Theme } from '../src/styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
