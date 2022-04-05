import { Link } from "react-router-dom"
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <main>
      <h1 className="error404">404</h1>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <div className="returnHomeLink">
        <Link to="/" className="returnHomeLink">
          <span>Retourner sur la page d’accueil</span>
        </Link>
      </div>
    </main>
  )
}

export default ErrorPage
