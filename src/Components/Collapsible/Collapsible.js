import { useState } from "react"
import "./Collapsible.css"
import arrow from "../../Assets/arrow.png"

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapsible">
      <button className="collapsibleToggle" onClick={() => setIsOpen(!isOpen)}>
        {props.label}
        <img
          src={arrow}
          alt="icone de flèche"
          className={isOpen ? "collapsibleArrow showArrow" : "collapsibleArrow"}
        />
      </button>
      <div
        className={
          isOpen
            ? "collapsibleContentWrapper showContent"
            : "collapsibleContentWrapper"
        }
      >
        <div className="collapsibleContent">{props.text}</div>
      </div>
    </div>
  )
}

export default Collapsible
