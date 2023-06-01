import { useContext, useState } from "react";
import Cards from "../UI/Molecules/Cards";
import { crewList } from "../utils/CardList";
import { CrewImg } from "../utils/CrewList";
import { ScreenSizeContext } from "../context/useMobile";
import "../../styles/crew.css"


function Crew() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const buttons = Array.from({ length: 4 }, (_, i) => i + 1);
  const showCard = currentValue >= 0 && currentValue < crewList.length;
  const handleClick = (index: number) => {
    setCurrentValue(index);
  };

  const {isMobile, isTablet, isDesktop} = useContext(ScreenSizeContext)

  return (
    <div className={isDesktop ? "crew_full" : isTablet ? "crew_tablet" : isMobile ? "crew_mobile" : ""}>
      <div>
        <h2 className="crew_title"><span>02 </span>MEET YOUR CREW</h2>
      </div>
      <div className="crew_position">
        <div className="crew_showCard">
        {showCard && (
          <div className="crew_cardCont">
            <h5>{crewList[currentValue].role}</h5>
            <Cards
              title={crewList[currentValue].title}
              description={crewList[currentValue].description}
            />
          </div>
        )}
        <div className="crew_buttonsCont">
          {buttons.map((__, index) => {
              return (
                <div className="crew_button">
                  <button key={index} onClick={() => handleClick(index)}>
                  </button>
                </div>
              );

            })}
        </div>
          
        </div>
        <div className="crew_people">
          <img src={CrewImg[currentValue].src} alt={CrewImg[currentValue].alt} />
        </div>
      
      </div>

    </div>
  )
}

export default Crew
