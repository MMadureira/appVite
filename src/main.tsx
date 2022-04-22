import React from 'react'
import ReactDOM from 'react-dom'

import { provider, database } from  './services/firebase';

import  './services/firebase'

import { RouterApp } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
)
