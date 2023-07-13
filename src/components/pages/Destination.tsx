import { useContext, useState } from "react";
import { Planets, PlanetsLabel } from "../utils/DestinationList"
import Cards from "../UI/Molecules/Cards";
import { CardPlanets} from "../utils/CardList"
import "../../styles/destination.css"
import { ScreenSizeContext } from "../context/useMobile";

function Destination() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleClick = (index: number) => {
    setCurrentValue(index);
    setActiveButton(index);
  };
  const buttons = Array.from({ length: Planets.length }, (_, i) => i + 1);
  const showCard = currentValue >= 0 && currentValue < CardPlanets.length;
  const {isMobile, isTablet, isDesktop} = useContext(ScreenSizeContext)
  
  return (
    
    <div className={isDesktop ? "destination_full" : isTablet ? "destination_tablet" : isMobile ? "destination_mobile" : ""}>
      <div className="auxText">
        <h1 className="destination_title"><span>01 </span>PICK YOUR DESTINATION</h1>
      </div>
      <div className="destination_planet">
            <img key={Planets[currentValue].alt} src={Planets[currentValue].src} alt={Planets[currentValue].alt} />
      </div>
      <div className="buttons_cont">
        {buttons.map((__, index) => {
          return (
            <div className={`button_form ${index === activeButton ? "active" : ""}`}>
              <button key={index} onClick={() => handleClick(index)}>
                {PlanetsLabel[index].label}
            </button>
            </div>
          );

        })}
        
      </div>
        {showCard && (
        <Cards
          title={CardPlanets[currentValue].title}
          description={CardPlanets[currentValue].description}
          distance={CardPlanets[currentValue].distance}
          time={CardPlanets[currentValue].time}
        />
      )}
      {/* <div className="container">
        <div className="div1">Div 1</div>
        <div className="div2">Div 2</div>
        <div className="div3">Div 3</div>
        <div className="div4">Div 4</div>
      </div> */}
    </div>
  )
}

export default Destination
