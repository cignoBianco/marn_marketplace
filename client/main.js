import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import "./public/css/css.module.css"


hydrate(<App/>, document.getElementById('root'))
