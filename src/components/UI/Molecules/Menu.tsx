import MenuItem from '../Atoms/MenuItem'
import { Link } from 'react-router-dom'
import { MenuArray } from '../../utils/MenuList'
import "../../../styles/menu.css"

function Menu() {
  return (
    <div className='menu_full'>
      {MenuArray.map(menu=>{
        return (
            <Link className='link' to={menu.link} key={menu.number}>
                <MenuItem Number={menu.number} Label={menu.label} />
            </Link>
        )
      })}
    </div>
  )
}

export default Menu
