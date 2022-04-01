import { Fragment } from "react"
import { useParams } from "react-router"
import "./HousingPage.css"
import data from "../../Data/data.json"

import Carousel from "../../Components/Carousel/Carousel"

function HousingPage() {
  const idURL = useParams().id.toString()

  return (
    <main>
      {data.map((housing, index) => {
        return housing.id === idURL ? (
          <Fragment key={housing.id}>
            {console.log((index = housing.pictures.length - 1 + index))}
            <Carousel
              src={
                housing.pictures[(index = housing.pictures.length - 1 + index)]
              }
            />
          </Fragment>
        ) : null
      })}
    </main>
  )
}

export default HousingPage
