import { useState } from 'react'
import './App.css'
import EntryList from "./components/EntryList"
import EntryForm from './components/EntryForm'
import EntryContextProvider from './contexts/EntryContext'

function App() {


  return (
    <div className="App">
      <EntryContextProvider>
        <EntryList />
        <EntryForm />
      </EntryContextProvider>
    </div>
  )
}

export default App
