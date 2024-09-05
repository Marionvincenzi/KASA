import { useState, useEffect } from "react";
import logements from "../datas/logement.json";
import "./Fiche.css";
import { useParams } from "react-router-dom";

const Logement = () => {
    const { id } = useParams()
    const [activeLogement,setActiveLogement] = useState(logements[0]); // Juste pour exemple
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const logement = logements.find((logement) => logement.id === id);
        setActiveLogement(logement)
        setCurrentIndex(0);
    })
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
                    <button className="carousel-button" onClick={prevImage}>
                        &lt;
                    </button>
                    <img
                        src={activeLogement.pictures[currentIndex]}
                        alt={`${activeLogement.title} image ${currentIndex + 1}`}
                        className="logement-carousel-image"
                        />
                    <button className="carousel-button" onClick={nextImage}>
                        &gt;
                    </button>
                        <h1>{activeLogement.title}</h1>
                        <p>{activeLogement.description}</p>
                </div>
            )}
            
           {activeLogement.host && (
            <div className="host-info">
                <img 
                src={activeLogement.host.picture}
                alt={activeLogement.host.name}
                className="host-picture" />
                <p className="host-name">{activeLogement.host.name}</p>
                </div>
           )}

            {activeLogement.equipments && activeLogement.equipments.length > 0 && (
                <ul className="equipments-list">
                    {activeLogement.equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                    
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Logement;