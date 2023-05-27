import MenuItem from '../Atoms/MenuItem'
import { Link } from 'react-router-dom'
import { MenuArray } from '../../utils/MenuList'

function Menu() {
  return (
    <div>
      {MenuArray.map(menu=>{
        return (
            <Link to={menu.link} key={menu.number}>
                <MenuItem Number={menu.number} Label={menu.label} />
            </Link>
        )
      })}
    </div>
  )
}

export default Menu
