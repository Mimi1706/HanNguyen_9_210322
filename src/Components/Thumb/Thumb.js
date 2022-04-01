import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Thumb.css"

class Thumb extends Component {
  render() {
    return (
      <article className="thumbCard">
        <img src={this.props.img} alt={this.props.alt} className="thumbImg" />
        <Link to={`/housing/${this.props.id}`}>
          <div className="thumbShade"></div>
        </Link>
        <h2 className="thumbTitle">{this.props.title}</h2>
      </article>
    )
  }
}

export default Thumb
