import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'


const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans',
    fontWeight: 400
  },
  palette: {
    // Blue Color variation
    primary: {

      light: '#5C645E',
      main: '#344038',
      dark: '#2D3928',
      contrastText: '#fff',
    },
    // Black color Variaion 
    secondary: {
      light: '#E8FFDE',
      main: '#8FFF00',
      dark: '#28A745',
      contrastText: '#fff',
    }

  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
