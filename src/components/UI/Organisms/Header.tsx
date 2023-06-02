import star from "../../../assets/headerStar.svg"
import Line from "../../../assets/headerLine.png"
import Menu from '../Molecules/Menu'
import "../../../styles/header.css"
import { ScreenSizeContext } from "../../context/useMobile"
import { useContext } from "react"


function Header() {
  const {isDesktop} = useContext(ScreenSizeContext)
  return (
    <header className="header_full">
      <div className="star">
        <img src={star} alt="headerStar" />
      </div>
      <div className={!isDesktop ? "hamburger_none" : "line"}>
        <img src={Line} alt=""/>
      </div>
      <Menu/>
    </header>
  )
}

export default Header
