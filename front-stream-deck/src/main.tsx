import React from 'react'
import ReactDOM from 'react-dom/client'
import {StreamDeck} from './pages/streamdeck'
import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StreamDeck />
  </React.StrictMode>,
)
