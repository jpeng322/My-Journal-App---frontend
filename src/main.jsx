import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContext } from './contexts/AuthContext'
import { EntryContext } from './contexts/EntryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // {/* </React.StrictMode>, */}
)
