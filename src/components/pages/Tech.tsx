import { useState } from "react";
import Cards from "../UI/Molecules/Cards";
import { techList } from "../utils/CardList";
import { techImg } from "../utils/TechList";
function Tech (){
    const [currentValue, setCurrentValue] = useState<number>(0);
    const buttons = Array.from({ length: techList.length }, (_, i) => i + 1);
    const showCard = currentValue >= 0 && currentValue < techList.length;
    const handleClick = (index: number) => {
        setCurrentValue(index);
    };
    return(
        <div>
            <div>
                <h1><span>03 </span>SPACE LAUNCH 101</h1>
            </div>
            <div>
                {buttons.map((__, index) => {
                    return (
                        <div>
                            <button key={index} onClick={() => handleClick(index)}>
                                {index + 1}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div>
            {showCard && (
                <div>
                    <h5>THE TERMINOLOGY</h5>
                        <Cards
                            title={techList[currentValue].title}
                            description={techList[currentValue].description}
                        />
                </div>
            )}
            </div>
            <div>
                <img src={techImg[currentValue].src} alt={techImg[currentValue].alt} />
            </div>
        </div>
    )
}
export default Tech