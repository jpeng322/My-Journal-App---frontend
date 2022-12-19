import { useState } from 'react'
import './App.css'
import EntryList from "./components/EntryList"
import EntryForm from './components/EntryForm'
import EntryContextProvider from './contexts/EntryContext'

function App() {


  return (
    <div className="app">
      <div> Jacky's Journal</div>
      <div className="content">
        <EntryContextProvider>
          <EntryList />
          <EntryForm />
        </EntryContextProvider>
      </div>
    </div>
  )
}

export default App
