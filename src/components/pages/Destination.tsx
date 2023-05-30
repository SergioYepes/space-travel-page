import { useState } from "react";
import { Planets, PlanetsLabel } from "../utils/DestinationList"
import Cards from "../UI/Molecules/Cards";
import { CardPlanets} from "../utils/CardList"
import "../../styles/destination.css"

function Destination() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const handleClick = (index: number) => {
    setCurrentValue(index);
  };
  const buttons = Array.from({ length: Planets.length }, (_, i) => i + 1);
  const showCard = currentValue >= 0 && currentValue < CardPlanets.length;

  return (
    <div className="destination_full">
      <div>
        <h1><span>01 </span>PICK YOUR DESTINATION</h1>
      </div>
      <div>
            <img src={Planets[currentValue].src} alt={Planets[currentValue].alt} />
      </div>
      <div>
        {buttons.map((__, index) => {
          return (
            <div>
              <button key={index} onClick={() => handleClick(index)}>
                {PlanetsLabel[index].label}
            </button>
            </div>
          );

        })}
        {showCard && (
        <Cards
          title={CardPlanets[currentValue].title}
          description={CardPlanets[currentValue].description}
          distance={CardPlanets[currentValue].distance}
          time={CardPlanets[currentValue].time}
        />
      )}
        
      </div>
    </div>
  )
}

export default Destination
