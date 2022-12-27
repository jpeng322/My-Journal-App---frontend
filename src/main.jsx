import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContext } from './contexts/AuthContext'
import { EntryContext } from './contexts/EntryContext'
import EntryContextProvider from './contexts/EntryContext'
import AuthContextProvider from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <EntryContextProvider>
      <App />
    </EntryContextProvider>
  </AuthContextProvider>
  // {/* </React.StrictMode>, */}
)
