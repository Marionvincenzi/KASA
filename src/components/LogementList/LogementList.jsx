import { Link } from "react-router-dom";
import logements from "../../datas/logement.json";
import "./LogementList.css"

const LogementsList = () => {
  return (
    <div className="logements-list">
      <main>
        <section id="logements" className="logements">
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
      </main>
    </div>
  );
};

export default LogementsList;
