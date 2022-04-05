import { Link } from "react-router-dom"
import "./Thumb.css"

const Thumb = (props) => {
  return (
    <article className="thumbCard">
      <img src={props.img} alt={props.alt} className="thumbImg" />
      <Link to={`/housing?id=${props.idURL}`}>
        <div className="thumbShade"></div>
      </Link>
      <h2 className="thumbTitle">{props.title}</h2>
    </article>
  )
}

export default Thumb
