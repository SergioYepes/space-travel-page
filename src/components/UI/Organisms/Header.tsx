import star from "../../../assets/headerStar.svg"
import Line from "../../../assets/headerLine.png"
import Menu from '../Molecules/Menu'
import "../../../styles/header.css"

function Header() {
  return (
    <header className="header_full">
      <div className="star">
        <img src={star} alt="headerStar" />
      </div>
      <div className="line">
        <img src={Line} alt=""/>
      </div>
      <Menu/>
    </header>
  )
}

export default Header
