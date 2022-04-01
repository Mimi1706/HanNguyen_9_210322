import { Component } from "react"
import "./Carousel.css"
import arrow from "../../Assets/arrow.png"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  nextImg = () => {
    this.setState({
      index: this.state.index + 1,
    })
  }

  previousImg = () => {
    this.setState({
      index: this.state.index + this.index.length - 1,
    })
  }

  render() {
    return (
      <div className="carousel">
        <button className="previousImgButton" onClick={this.previousImg}>
          <img src={arrow} alt="flèche précédente" className="carouselArrow" />
        </button>

        <img
          className="carouselImg"
          src={this.props.src[this.props.index]}
          alt="images du carousel"
        ></img>

        <button className="nextImgButton" onClick={this.nextImg}>
          <img src={arrow} alt="flèche suivante" className="carouselArrow" />
        </button>
      </div>
    )
  }
}

export default Carousel
