import Line from "../../../assets/headerLine.png"
import { CardProps } from "../../interfaces/CardProps"

function Cards({title,description,distance,time}:CardProps) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <img src={Line} alt="lineImg"/>
      </div>
      <div>
        {distance && time && (<>
        <div>
          <h4>AVG. DISTANCE</h4>
          <h2>{distance}</h2>
        </div><div>
            <h4>EST. TRAVEL TIME</h4>
            <h2>{time}</h2>
          </div>
        </>)}
      </div>
    </div>
  )
}

export default Cards
