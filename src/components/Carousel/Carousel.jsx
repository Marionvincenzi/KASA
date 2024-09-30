import "./Carousel.css";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  if (!pictures || pictures.length === 0) {
    return <></>;
  }

  return (
    <div className="logement-container">
      {/* Carrousel d'images */}
      <div className="logement-carousel">
        {pictures.length > 1 && (
          <button className="arrow arrow_left" onClick={prevImage}>
            <img
              src={arrowLeft}
              alt="Fleche de gauche"
              className="arrow-container"
            />
          </button>
        )}

        <img
          src={pictures[currentIndex]}
          alt={`${title} image ${currentIndex + 1}`}
          className="logement-carousel-image"
        />

        {pictures.length > 1 && (
          <button className="arrow arrow_right" onClick={nextImage}>
            <img
              src={arrowRight}
              alt="Fleche de droite"
              className="arrow-container"
            />
          </button>
        )}

        <div className="dots">{`${currentIndex + 1}/${pictures.length}`}</div>
      </div>
    </div>
  );
};

// Validation des props
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};


export default Carousel;
