import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles.css'

import theme from './theme'

import { LoginPage } from './auth/LoginPage'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
      <BrowserRouter>
      <CssBaseline/>
      <App />  
      
      </BrowserRouter>
      
    </ThemeProvider>
    
  </React.StrictMode>
)
 