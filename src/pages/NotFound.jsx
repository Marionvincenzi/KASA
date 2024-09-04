import { Link } from "react-router-dom";
import "../pages/NotFound.css"

const NotFound = () => {
  return (
    <div>
      <div className="pageNotFound">
        <h1 className="title-not-found">404</h1>
        <p className="text-not-found">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error-link" to="/">
         Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;