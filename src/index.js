import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
)
/* Esta es otra manera de hacer lo mismo de arriba
 ReactDOM.render(
  <BrowserRouter>
  <App />,
  </BrowserRouter>,
  document.getElementById('root')
) */