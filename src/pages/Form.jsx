import { useState, useEffect } from "react";
import logements from "../datas/logement.json";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/Rating/Rating"
import Carousel from "../components/Carousel/Carousel"
import NotFound from "../pages/NotFound"
import "./Form.css";
import { useParams } from "react-router-dom";



const Logement = () => {
  const { id } = useParams();
  const [activeListing, setActiveLogement] = useState(null)
  
  useEffect(() => {
    const logement = logements.find((logement) => logement.id === String(id));
    if (logement) {
      setActiveLogement(logement);
    }
  }, [id]);
  
  if(!activeListing) {
    return (
      <NotFound />
    )
  }
  return (
    <div className="logement-container">
    <Carousel pictures={activeListing.pictures} title={activeListing.title} />

      <section className="first-container">
      <div className="container-title">
        <h1 className="title">{activeListing.title}</h1>
        <p className="subtitle">{activeListing.location}</p>
              <div className="tags">
              {activeListing.tags.map((tag, index) => (
                  <button key={index} className="tag">
                  {tag}
                </button>
              ))}
              </div>
            </div>

            <section className="housing-info">
          {activeListing.host && (
            <div className="host-info">
              <p className="host-name">{activeListing.host.name}</p>
              <img
                src={activeListing.host.picture}
                alt={activeListing.host.name}
                className="host-picture"
              />
            </div>
          )}
          <div className="rating">
            <Rating rating={Number(activeListing.rating)} />
          </div>
          </section>
          </section>
      <section className="second-container">
        <Collapse
          title="Description"
          content={activeListing.description}
          className="collapse collapse-description"
        >
          <div>{activeListing.description}</div>
        </Collapse>
        <Collapse
          title="Équipements"
          content={activeListing.equipments}
          className=" collapse collapse-equipments"
        >
          {activeListing.equipments &&
            activeListing.equipments.length > 0 && (
              <ul className="equipments-list">
                {activeListing.equipments.map((equipement, index) => (
                  <li key={index}>{equipement}</li>
                ))}
              </ul>
            )}
        </Collapse>
      </section>

    </div>
  );
};
export default Logement;