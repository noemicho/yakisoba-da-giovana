import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import App from './pages/App.jsx'
import '../src/bootstrap.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

