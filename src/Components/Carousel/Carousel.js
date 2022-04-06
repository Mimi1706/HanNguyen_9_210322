import "./Carousel.css"
import arrow from "../../Assets/arrow.png"
import { useState } from "react"

const Carousel = (props) => {
  const [currentImg, setCurrentImg] = useState(0)
  const maxImg = props.maxImg

  return (
    <div className="carousel">
      <button
        className={
          maxImg === 1 ? "previousImgButton hidden" : "previousImgButton"
        }
      >
        <img
          src={arrow}
          alt="flèche précédente"
          className="carouselArrow"
          onClick={() => {
            currentImg === 0
              ? setCurrentImg(currentImg + maxImg - 1)
              : setCurrentImg(currentImg - 1)
          }}
        />
      </button>

      <img
        className="carouselImg"
        src={props.src[currentImg]}
        alt="images du carousel"
      ></img>

      <span className="carouselImgNumber">
        {currentImg + 1}/{maxImg}
      </span>

      <button
        className={maxImg === 1 ? "nextImgButton hidden" : "nextImgButton"}
      >
        <img
          src={arrow}
          alt="flèche suivante"
          className="carouselArrow"
          onClick={() => {
            currentImg === maxImg - 1
              ? setCurrentImg(0)
              : setCurrentImg(currentImg + 1)
          }}
        />
      </button>
    </div>
  )
}

export default Carousel
