import { useContext, useState } from 'react'
import './App.css'
import EntryContextProvider from './contexts/EntryContext'
import AuthContextProvider from './contexts/AuthContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/FilterBar'
import MonthlyEntries from './pages/MonthlyEntries'
import Favorites from './pages/Favorites'
import { v4 as uuidv4 } from 'uuid';
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {


  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const months = monthsArray.map(month => <Route key={uuidv4()} exact path={month} element={<MonthlyEntries month={month} />} />)

  return (
    <div className="app">
      <AuthContextProvider>
        <EntryContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {months}
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </EntryContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
