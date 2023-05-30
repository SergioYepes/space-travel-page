
import explore from "../../assets/homeExplore.svg"
import { Link } from 'react-router-dom'
import "../../styles/home.css"

function Home() {
  return (
    <div className="home_full">
      <div className="home_card">
        <h2>
            SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1>
            SPACE
        </h1>
        <h4>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </h4>
      </div>
      <div>
        <Link to="/Destination">
            <img src={explore} alt="exploreImage" />
        </Link>
      </div>
    </div>
  )
}

export default Home
