import { useContext, useState } from 'react'
import './App.css'
import EntryContextProvider from './contexts/EntryContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import MonthlyEntries from './pages/MonthlyEntries'

function App() {


  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const months = monthsArray.map(month => <Route path={month} element={<MonthlyEntries month={month} />} />)

  return (
    <div className="app">
      <EntryContextProvider>
        <BrowserRouter>

          <div className="title"> My Journal</div>
          < Navbar monthsArray={monthsArray} />
          <Routes>
            <Route path="/" element={<Home />} />
            {months}
          </Routes>
        </BrowserRouter>
      </EntryContextProvider>
    </div>
  )
}

export default App
