import { useContext, useState } from "react";
import Cards from "../UI/Molecules/Cards";
import { techList } from "../utils/CardList";
import { techImg } from "../utils/TechList";
import "../../styles/technology.css"
import { ScreenSizeContext } from "../context/useMobile";
function Tech (){
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [activeButton, setActiveButton] = useState<number>(0);

    const buttons = Array.from({ length: techList.length }, (_, i) => i + 1);
    const showCard = currentValue >= 0 && currentValue < techList.length;
    const handleClick = (index: number) => {
        setCurrentValue(index);
        setActiveButton(index);

    };
  const {isMobile, isTablet, isDesktop} = useContext(ScreenSizeContext)

    return(
        <div className={isDesktop ? "tech_full" : isTablet ? "tech_tablet" : isMobile ? "tech_mobile" : ""}>
            <div className="tech_title">
                <h1><span>03 </span>SPACE LAUNCH 101</h1>
            </div>
            <div className="tech_position">
                <div className="tech_fullCardCont">
                    <div className="tech_buttonsCont">
                        {buttons.map((__, index) => {
                            return (
                                <div className={`tech_button ${index === activeButton ? "active" : ""}`}>
                                    <button key={index} onClick={() => handleClick(index)}>
                                        {index + 1}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                    {showCard && (
                        <div className="tech_cardCont">
                            <h5>THE TERMINOLOGY ...</h5>
                                <Cards
                                    title={techList[currentValue].title}
                                    description={techList[currentValue].description}
                                />
                        </div>
                    )}
                    </div>
                </div>
                <div className="tech_image">
                    <img src={techImg[currentValue].src} alt={techImg[currentValue].alt} />
                </div>
            </div>
        </div>
    )
}
export default Tech