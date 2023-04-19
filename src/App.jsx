import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/login'
import MainDashboard from './pages/dashboard/main'
import Statistics from './pages/dashboard/stat'
import Brends from './pages/dashboard/brend'



function App() {

  return(
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<MainDashboard/>}>
        <Route path='stat' element={<Statistics/>}/>
        <Route path="brend" element={<Brends/>}/>
      </Route>
    </Routes>
      
  )     
  
}

export default App
