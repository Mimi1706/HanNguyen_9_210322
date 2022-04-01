import { Component } from "react"
import LogoFooter from "../../Assets/logo2.png"
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={LogoFooter} alt="Kasa Logo" className="logoFooter"></img>
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer
