import { Link } from "react-router-dom";
import logements from "../../datas/logement.json";
import "./LogementList.css"

const LogementsList = () => {
  return (
    <section className="logements-list">

             
          {logements.map((logement) => (
            <article key={logement.id} className="card">
              <Link to={`/logement/${logement.id}`} className="card-link">
             <div className="img-container">
              <img src={logement.cover} alt={logement.title} className="card-image" />
             </div>
             <div className="card-title">
              <h2>{logement.title}</h2>
             </div>
              </Link>
            </article>
          ))}

        </section>
  
  );
};

export default LogementsList;
