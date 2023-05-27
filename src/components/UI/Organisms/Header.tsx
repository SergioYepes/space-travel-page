import star from "../../../assets/headerStar.svg"
import Line from "../../../assets/headerLine.png"
import Menu from '../Molecules/Menu'

function Header() {
  return (
    <header>
      <div>
        <img src={star} alt="headerStar" />
      </div>
      <div>
        <img src={Line} alt=""/>
      </div>
      <Menu/>
    </header>
  )
}

export default Header
