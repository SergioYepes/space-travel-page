
import { MenuItemProps } from '../../interfaces/MenuItemProps'

function MenuItem({Number, Label}:MenuItemProps) {
  return (
    <div>
      <h2>{Number}</h2>
      <h2>{Label}</h2>
    </div>
  )
}

export default MenuItem
