import { Link } from "react-router-dom"
import Logo from "../../Assets/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Kasa Logo" className="logo"></img>
      </Link>
      <nav className="navHeader">
        <Link to="/" className="homeLink">
          Accueil
        </Link>
        <Link to="/About" className="aboutLink">
          À propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
