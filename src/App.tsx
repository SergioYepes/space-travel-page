import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/UI/Organisms/Header'
import Home from './components/pages/Home'
import Destination from './components/pages/Destination'
import Crew from './components/pages/Crew'
import Tech from './components/pages/Tech'
import def from "./assets/homeBackground.jpg"
import des from  "./assets/destinationBackground.png"
import cre from "./assets/crewBackground.png"
import tec from "./assets/techBackground.png"


function App() {
 const location = useLocation();
 const defaultImg =  def
 let backgroundImg = defaultImg
 switch (location.pathname) {
  case "/Destination":
    backgroundImg = des;
    break;
  case "/Crew":
    backgroundImg = cre;
    break;
  case "/Tech":
    backgroundImg = tec;
    break;
  default:
    backgroundImg = defaultImg;
}

  return (
    <div style={{backgroundImage: `url(${backgroundImg})`}}>
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
