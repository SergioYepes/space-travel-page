import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/UI/Organisms/Header'
import Home from './components/pages/Home'
import Destination from './components/pages/Destination'
import Crew from './components/pages/Crew'
import Tech from './components/pages/Tech'
import def from "./assets/homeBackground.jpg"
import defMobile from "./assets/mobileHomeBackground.jpg"
import des from  "./assets/destinationBackground.png"
import desMobile from "./assets/mobileDestinationBackground.jpg"
import cre from "./assets/crewBackground.png"
import creMobile from "./assets/mobileCrewBackground.jpg"
import tec from "./assets/techBackground.png"
import tecMobile from "./assets/mobileTecnologyBackground.jpg"

import { useContext } from 'react'
import { ScreenSizeContext } from './components/context/useMobile'


function App() {
const {isDesktop} = useContext(ScreenSizeContext)
 const location = useLocation();
 const defaultImg =  def
 let backgroundImg = defaultImg
 switch (location.pathname) {
  case "/Destination":
    isDesktop ? backgroundImg = des : backgroundImg = desMobile;
    break;
  case "/Crew":
    isDesktop ? backgroundImg = cre : backgroundImg = creMobile;
    break;
  case "/Tech":
    isDesktop ? backgroundImg = tec : backgroundImg = tecMobile;
    break;
  default:
    isDesktop ? backgroundImg = defaultImg : backgroundImg = defMobile;
}

  return (
    <div className={!isDesktop ? "mobile-bg" : ""} style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Destination" element ={<Destination/>}/>
        <Route path="/Crew" element ={<Crew/>}/>
        <Route path="/Tech" element ={<Tech/>}/>
      </Routes>

    </div>
  )
}

export default App
