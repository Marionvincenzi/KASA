import { Link } from "react-router-dom";
import "./LogementList.css"
import PropTypes from "prop-types"

const LogementsList = ({logements}) => {
  return (
    <section className="logements-list">

             
{Array.isArray(logements) && logements.map((logement) => (
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

// Ajout des PropTypes pour valider les props
LogementsList.propTypes = {    

  logements : PropTypes.array.isRequired        
};

export default LogementsList;
