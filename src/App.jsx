import { useState } from 'react'
import './App.css'
import EntryContextProvider from './contexts/EntryContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import January from './pages/January'
import Navbar from './components/Navbar'
function App() {


  return (
    <div className="app">
      <EntryContextProvider>
        <BrowserRouter>
          {/* <div className="app">
        <div className="title"> My Journal</div>
        <div className="content">
          <EntryContextProvider>
            <EntryList />
            <EntryForm />
          </EntryContextProvider>
        </div>
      </div> */}
          <div className="title"> My Journal</div>
          < Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="january" element={<January />} />
          </Routes>
        </BrowserRouter>
      </EntryContextProvider>
    </div>
  )
}

export default App
