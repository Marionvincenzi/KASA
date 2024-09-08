import { useState, useEffect } from "react";
import logements from "../datas/logement.json";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/Rating/Rating"
import "./Fiche.css";
import { useParams } from "react-router-dom";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
const Logement = () => {
  const { id } = useParams();
  const [activeLogement, setActiveLogement] = useState(logements[0]); // Juste pour exemple
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const logement = logements.find((logement) => logement.id === id);
    if (logement) {
      setActiveLogement(logement);
      setCurrentIndex(0);
    }
  }, [id]);
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activeLogement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activeLogement.pictures.length - 1 : prevIndex - 1
    );
  };
  if (!activeLogement) {
    return <div></div>;
  }
  return (
    <div className="logement-container">
      {/* Carrousel d'images */}
      {activeLogement.pictures && activeLogement.pictures.length > 0 && (
        <div className="logement-carousel">
          {activeLogement.pictures.length > 1 && (
          <button className="arrow arrow_left" onClick={prevImage}>
            <img
              src={arrowLeft}
              alt="Fleche de droite"
              className="arrow-container"
            />
          </button>
          )}

          <img
            src={activeLogement.pictures[currentIndex]}
            alt={`${activeLogement.title} image ${currentIndex + 1}`}
            className="logement-carousel-image"
          />
      {activeLogement.pictures.length > 1 &&(
          <button className="arrow arrow_right" onClick={nextImage}>
            <img
              src={arrowRight}
              alt="Fleche de droite"
              className="arrow-container"
            />
          </button>
      )}
      <div className="dots">
        {`${currentIndex + 1}/${activeLogement.pictures.length}`}
      </div>
        </div>
      )}

      <section className="first-container">
      <div className="container-title">
        <h1 className="title">{activeLogement.title}</h1>
        <p className="subtitle">{activeLogement.location}</p>
              <div className="tags">
              {activeLogement.tags.map((tag, index) => (
                  <button key={index} className="tag">
                  {tag}
                </button>
              ))}
              </div>
            </div>

            <section className="housing-info">
          {activeLogement.host && (
            <div className="host-info">
              <p className="host-name">{activeLogement.host.name}</p>
              <img
                src={activeLogement.host.picture}
                alt={activeLogement.host.name}
                className="host-picture"
              />
            </div>
          )}
          <div className="rating">
            <Rating rating={parseInt(activeLogement.rating, 10)} />
          </div>
          </section>
          </section>
      <section className="second-container">
        <Collapse
          title="Description"
          content={activeLogement.description}
          className="collapse collapse-description"
        >
          <div>{activeLogement.description}</div>
        </Collapse>
        <Collapse
          title="Équipements"
          content={activeLogement.equipments}
          className=" collapse collapse-equipments"
        >
          {activeLogement.equipments &&
            activeLogement.equipments.length > 0 && (
              <ul className="equipments-list">
                {activeLogement.equipments.map((equipement, index) => (
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