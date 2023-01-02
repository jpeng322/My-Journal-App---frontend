import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import MonthlyEntries from './pages/MonthlyEntries'
import Favorites from './pages/Favorites'
import { v4 as uuidv4 } from 'uuid';
import Signup from './pages/Signup'
import Login from './pages/Login'
import { AuthContext } from './contexts/AuthContext'
function App() {

  const { user } = useContext(AuthContext)
  { user ? console.log("exists") : console.log("does not exist") }
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const months = monthsArray.map(month => <Route key={uuidv4()} exact path={month} element={<MonthlyEntries month={month} />} />)

  return (
    <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
              {months}
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
              <Route path="/login" element={user ? <Navigate to="/signup" /> : <Login />} />
              {console.log(user)}
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
