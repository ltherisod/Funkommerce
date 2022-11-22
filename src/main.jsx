import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider}from '@mui/material'
import theme from './contexts/MuiTheme'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
