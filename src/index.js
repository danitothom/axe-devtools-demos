import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import './index.css'
import '@deque/cauldron-styles/dist/index.css'

const container = document.getElementById('root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
)
