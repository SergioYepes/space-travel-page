import MenuItem from '../Atoms/MenuItem'
import { Link } from 'react-router-dom'
import { MenuArray } from '../../utils/MenuList'
import "../../../styles/menu.css"
import { ScreenSizeContext } from "../../context/useMobile"
import { useContext, useState } from "react"
import hamburger from "../../../assets/hamburguer.svg"

function Menu() {
  const[showMenu, setShowMenu] = useState<boolean>(false) 
  const {isMobile, isTablet, isDesktop} = useContext(ScreenSizeContext)
  console.log(isMobile, isTablet, isDesktop);
  
  function onClick(){
    setShowMenu(!showMenu)
  }
  
  return (
    <>
    {isDesktop && (
      <div className='menu_full'>
        {MenuArray.map(menu=>{
          return (
              <Link className='link' to={menu.link} key={menu.number}>
                  <MenuItem Number={menu.number} Label={menu.label} />
              </Link>
          )
        })}
    </div>
    )}
    {isTablet && (
      <div className='menu_tablet'>
        {MenuArray.map(menu=>{
          return (
              <Link className='link' to={menu.link} key={menu.number}>
                  <MenuItem Number={menu.number} Label={menu.label} />
              </Link>
          )
        })}
    </div>
    )}
    {isMobile && (
      <div className={showMenu ? "hamburger_none" : ''}>
        <div>
          <button onClick={onClick} className='Hamburguer_mobile'>
            <img src={hamburger} alt="hamburguer logo" />
          </button>
        </div>
      </div>
    )}
    {showMenu && isMobile &&(
      <div className='menu_hamburger'>
        <button onClick={onClick} className='drawer_button'>X</button>
        <div className='links_cont'>
          {MenuArray.map(menu=>{
            return (
                <Link className='link' to={menu.link} key={menu.number} onClick={onClick}>
                    <MenuItem Number={menu.number} Label={menu.label} />
                </Link>
            )
          })}
        </div>
      </div>
    )}

    </>
  )
}

export default Menu
