
import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import info from "../datas/logement.json";
import "../pages/Fiche.css";

import NotFound from "./NotFound";
import Stars from "../components/Stars/Stars"
import Collapse from "../components/Collapse/Collapse"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"

const Fiche = () => {
    const { id } = useParams();
    const logement = info.find((item) => item.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!logement) {
        return <NotFound />
    }

    const pictures = logement.pictures;

    const goNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === pictures.length -1 ? 0 : prevIndex + 1
        );
    };

    const goPreviewImge = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? pictures.length -1 :prevIndex - 1
        );
    }; 

  return (
    <div>
        <section className="fiche">
            <div id="fiche-banner">
                <img className="banner-logement"
                src={pictures[currentImageIndex]}
                alt={`Image ${currentImageIndex +1 }`} />
                {pictures.length > 1 && (
                    <><div>
                        <button className="arrow-left" onClick={goPreviewImge}>
                            <img src={arrowLeft} alt="flèche de gauche" />
                        </button>
                        <button className="arrow-right" onClick={goNextImage}>
                            <img src={arrowRight} alt="flèche de droite" />
                        </button>
                    </div><div className="dots">
                        {`${currentImageIndex +1 }/${pictures.length}`}
                    </div></>
                )}
            </div>
            <section className="container-first">
                <div className="title-container">
                    <h1 className="title">{logement.title}</h1>
                    <p className="subtitle">{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <button key={index} className="tag">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="landlord-container">
                    <div className="landlord">
                        <div className="name">
                            {logement.host.name.split(" ").map((part, index) => (
                                <React.Fragment key={index}>
                                    {part}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <div className="rating">
                        <Stars stars={parseInt(logement.stars, 10)} />
                    </div>
                </div>
            </section>
            <section className="second-container">
                <div className="container-description">
                    <Collapse label="Description" className="collapse-custom">
                    <div>{logement.description}</div>
                    </Collapse>
                    <Collapse label="Equipement" className="custom-collapse">
                    <ul className="equipement-list">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                    </Collapse>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Fiche

