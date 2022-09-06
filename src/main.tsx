/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
