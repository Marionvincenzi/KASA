
import { Link } from "react-router-dom";
import "./LogementCard.css";
const LogementCard = ({ logement }) => {
  return (
    <article className="card">
      <Link to={`/logement/${logement.id}`} className="card-link">
        <div className="img-container">
          <img src={logement.cover} alt={logement.title} />
        </div>
        <div className="card-title">
          <h2>{logement.title}</h2>
        </div>
      </Link>
    </article>
  );
};
export default LogementCard;