import { Component } from "react"
import "./HomePage.css"
import Thumb from "../../Components/Thumb/Thumb"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import imgBanner from "../../Assets/home_banner.png"
import data from "../../Data/data.json"

class HomePage extends Component {
  render() {
    return (
      <main>
        <HeroBanner
          className="heroBanner"
          text="Chez vous, partout et ailleurs"
          img={imgBanner}
          alt="Paysage de rochers dans l'eau"
        />
        <div className="thumbWrapper">
          {data.map((housing) => {
            return (
              <Thumb
                img={housing.cover}
                alt={housing.title}
                title={housing.title}
                id={housing.id}
              />
            )
          })}
        </div>
      </main>
    )
  }
}

export default HomePage
