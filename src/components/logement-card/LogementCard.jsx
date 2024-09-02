import { Link } from "react-router-dom";
import "./LogementCard.css";
import logements from "../../datas/logement.json";

const LogementCard = ({ logements }) => {
    
    return (
        <article className="card">
            <Link to={`/logement/${logements.id}`} className="card-link">
                <div className="img-container">
                    <img src={logements.cover} alt={logements.title} />
                </div>
                <div className="card-title">
                    <h2>{logements.title}</h2>
                </div>
            </Link>
        </article>
    );
};

  

export default LogementCard;
