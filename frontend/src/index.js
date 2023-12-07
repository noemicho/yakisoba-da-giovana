import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import '../src/bootstrap.js'

import MainRoutes from './routes/routes.js'
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <MainRoutes></MainRoutes>
  </BrowserRouter>
)

