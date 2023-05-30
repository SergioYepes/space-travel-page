
import { MenuItemProps } from '../../interfaces/MenuItemProps'
import "../../../styles/menu.css"

function MenuItem({Number, Label}:MenuItemProps) {
  return (
    <div className='menu_text'>
      <h2 className='menu_number'>{Number}</h2>
      <h2>{Label}</h2>
    </div>
  )
}

export default MenuItem
