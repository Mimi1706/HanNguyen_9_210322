import { Fragment, useEffect, useState } from "react"
import "./HousingPage.css"

import Carousel from "../../Components/Carousel/Carousel"
import Tag from "../../Components/Tag/Tag"
import Collapsible from "../../Components/Collapsible/Collapsible"
import Rating from "../../Components/Rating/Rating"

const HousingPage = () => {
  const [data, setData] = useState([])
  let idURL = new URL(document.location).searchParams.get("id")

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData)
      })
  }, [])

  return (
    <main>
      {data.map((housing) => {
        return housing.id === idURL ? (
          <Fragment key={housing.id}>
            <Carousel src={housing.pictures} />
            <section className="informations">
              <h1 className="housingTitle">{housing.title}</h1>
              <h3 className="housingLocation">{housing.location}</h3>
              <div className="housingTagList">
                {housing.tags.map((tag, index) => (
                  <Tag tag={tag} key={index} />
                ))}
              </div>
              <h3 className="housingHostName">{housing.host.name}</h3>
              <img
                src={housing.host.picture}
                alt="Portrait de l'hôte"
                className="housingHostPicture"
              ></img>
              <div className="housingRatingWrapper">
                <Rating stars={housing.rating} />
              </div>
            </section>
            <section className="collapsibleHousingWrapper">
              <Collapsible label="Description" text={housing.description} />
              <Collapsible
                label="Équipements"
                text={housing.equipments.map((equipement, index) => {
                  return (
                    <li className="housingEquipement" key={index}>
                      {equipement}
                    </li>
                  )
                })}
              />
            </section>
          </Fragment>
        ) : null
      })}
    </main>
  )
}

export default HousingPage
