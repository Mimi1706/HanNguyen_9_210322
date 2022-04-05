import "./Carousel.css"
import arrow from "../../Assets/arrow.png"
import { useState } from "react"

const Carousel = (props) => {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <div className="carousel">
      <button className="previousImgButton">
        <img
          src={arrow}
          alt="flèche précédente"
          className="carouselArrow"
          onClick={() => {
            setCurrentImg(currentImg - 1)
          }}
        />
      </button>

      <img
        className="carouselImg"
        src={props.src[currentImg]}
        alt="images du carousel"
      ></img>

      <button className="nextImgButton">
        <img
          src={arrow}
          alt="flèche suivante"
          className="carouselArrow"
          onClick={() => {
            setCurrentImg(currentImg + 1)
          }}
        />
      </button>
    </div>
  )
}

export default Carousel
