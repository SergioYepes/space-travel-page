import { useState } from "react";
import Cards from "../UI/Molecules/Cards";
import { crewList } from "../utils/CardList";
import { CrewImg } from "../utils/CrewList";


function Crew() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const buttons = Array.from({ length: 4 }, (_, i) => i + 1);
  const showCard = currentValue >= 0 && currentValue < crewList.length;
  const handleClick = (index: number) => {
    setCurrentValue(index);
  };


  return (
    <div>
      <div>
        <h2><span>02 </span>MEET YOUR CREW</h2>
      </div>
      <div>

      {buttons.map((__, index) => {
          return (
            <div>
              <button key={index} onClick={() => handleClick(index)}>
              </button>
            </div>
          );

        })}

      {showCard && (
        <div>
          <h5>{crewList[currentValue].role}</h5>
          <Cards
            title={crewList[currentValue].title}
            description={crewList[currentValue].description}
          />
        </div>
      )}
        
      </div>
      <div>
        <img src={CrewImg[currentValue].src} alt={CrewImg[currentValue].alt} />
      </div>
    </div>
  )
}

export default Crew
