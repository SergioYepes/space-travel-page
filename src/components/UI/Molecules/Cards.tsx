import Line from "../../../assets/headerLine.png"
import { CardProps } from "../../interfaces/CardProps"

function Cards({title,description,distance,time}:CardProps) {
  return (
    <div className="card_cont">
      <div>
        <h1 className="card_title">{title}</h1>
      </div>
      <div>
        <p className="card_description">{description}</p>
      </div>
      <div className="card_line">
        <img src={Line} alt="lineImg"/>
      </div>
      <div className="card_travelDistance">
        {distance && time && (<>
        <div className="card_distanceCont">
          <h4>AVG. DISTANCE</h4>
          <h2>{distance}</h2>
        </div>
        <div className="card_travelCont">
            <h4>EST. TRAVEL TIME</h4>
            <h2>{time}</h2>
          </div>
        </>)}
      </div>
    </div>
  )
}

export default Cards
