import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { DeliveriesContextProvider } from './contexts/DeliveriesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveriesContextProvider>
          <Router />
        </DeliveriesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
