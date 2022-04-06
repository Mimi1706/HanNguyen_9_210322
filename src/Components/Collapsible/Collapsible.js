import "./Collapsible.css"
import arrow from "../../Assets/arrow.png"
import { useState } from "react"

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details className="collapsible">
      <summary className="collasibleLabel" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        <img
          src={arrow}
          alt="icone de flèche"
          className={isOpen ? "collapsibleArrow showArrow" : "collapsibleArrow"}
        />
      </summary>
      <div className="collapsibleContent">{props.text}</div>
    </details>
  )
}

export default Collapsible
