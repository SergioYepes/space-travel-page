import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/UI/Organisms/Header'
import Home from './components/pages/Home'
import Destination from './components/pages/Destination'
import Crew from './components/pages/Crew'
import Tech from './components/pages/Tech'


function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Destination" element ={<Destination/>}/>
        <Route path="/Crew" element ={<Crew/>}/>
        <Route path="/Tech" element ={<Tech/>}/>
      </Routes>

    </>
  )
}

export default App
