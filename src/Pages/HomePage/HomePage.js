import "./HomePage.css"
import Thumb from "../../Components/Thumb/Thumb"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import imgBanner from "../../Assets/home_banner.png"
import { useEffect, useState } from "react"

const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData)
      })
  }, [])

  return (
    <main>
      <HeroBanner
        className="homeBanner"
        text="Chez vous, partout et ailleurs"
        img={imgBanner}
        alt="Paysage de rochers dans l'eau"
      />
      <div className="thumbWrapper">
        {data.map((housing) => {
          return (
            <Thumb
              key={housing.id}
              img={housing.cover}
              alt={housing.title}
              title={housing.title}
              idURL={housing.id}
            />
          )
        })}
      </div>
    </main>
  )
}

export default HomePage
