import "./Rating.css"

const Rating = (props) => {
  const renderStars = () => {
    let allStars = []
    for (let i = 0; i < 5; i++) {
      if (props.stars > i) {
        allStars.push(<i className="fa-solid fa-star"></i>)
      } else {
        allStars.push(<i className="fa-solid fa-star grey"></i>)
      }
    }
    return allStars
  }

  return renderStars()
}

export default Rating
