import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./HousingPage.css"

import Carousel from "../../Components/Carousel/Carousel"
import Tag from "../../Components/Tag/Tag"
import Collapsible from "../../Components/Collapsible/Collapsible"
import Rating from "../../Components/Rating/Rating"

const HousingPage = () => {
  const [housing, setHousingData] = useState([])
  let { idURL } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((responseData) => {
        for (let i = 0; i < responseData.length; i++) {
          if (responseData[i].id === idURL) {
            setHousingData(responseData[i])
            return responseData[i]
          }
        }
      })
      .then((responseData) => {
        if (responseData === undefined) {
          navigate("*")
        }
      })
  }, [idURL, navigate])

  return (
    <main>
      {idURL === housing.id && (
        <Fragment key={housing.id}>
          <Carousel src={housing.pictures} maxImg={housing.pictures.length} />
          <section className="informations">
            <h1 className="housingTitle">{housing.title}</h1>
            <h2 className="housingLocation">{housing.location}</h2>
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
      )}
    </main>
  )
}

export default HousingPage
