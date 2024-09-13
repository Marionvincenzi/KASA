import "./Carousel.css";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import { useState } from "react";
import logements from "../../datas/logement.json"

const Carousel = () => {
  const [activeListing] = useState(logements[0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activeListing.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activeListing.pictures.length - 1 : prevIndex - 1
    );
  };

  if (!activeListing || !activeListing.pictures) {
    return <></>;
  }

  return (
    <div className="logement-container">
      {/* Carrousel d'images */}
      {activeListing.pictures.length > 0 && (
        <div className="logement-carousel">
          {activeListing.pictures.length > 1 && (
            <button className="arrow arrow_left" onClick={prevImage}>
              <img
                src={arrowLeft}
                alt="Fleche de gauche"
                className="arrow-container"
              />
            </button>
          )}

          <img
            src={activeListing.pictures[currentIndex]}
            alt={`${activeListing.title} image ${currentIndex + 1}`}
            className="logement-carousel-image"
          />

          {activeListing.pictures.length > 1 && (
            <button className="arrow arrow_right" onClick={nextImage}>
              <img
                src={arrowRight}
                alt="Fleche de droite"
                className="arrow-container"
              />
            </button>
          )}
          <div className="dots">
            {`${currentIndex + 1}/${activeListing.pictures.length}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

