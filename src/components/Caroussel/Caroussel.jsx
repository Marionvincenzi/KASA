import { useState } from "react"
import arrowLeft from "../../assets/arrow_left.png"
import arrowRight from "../../assets/arrow_right.png"
import "./Caroussel.css"


const Caroussel = ({ activeLogement }) => {
    const [pictureIndex, setPictureIndex] = useState(0);
    
    const nextPicture = () => {
        let newIndex = pictureIndex + 1;
        if (newIndex > activeLogement.pictures.length - 1) {
            newIndex = 0;
        }
        setPictureIndex(newIndex);
    };

    const prevPicture = () => {
        let newIndex = pictureIndex - 1;
        if (newIndex < 0) {
            newIndex = activeLogement.pictures.length - 1;
        }
        setPictureIndex(newIndex);
    };

    if (!activeLogement || !activeLogement.pictures || activeLogement.pictures.length === 0) {
        return null; // Ne rien afficher si pas de données
    }

    return (
        <div className="caroussel">
            <img
                className="caroussel-image"
                src={activeLogement.pictures[pictureIndex]}
                alt={activeLogement.title}
            />
            {activeLogement.pictures.length > 1 && (
                <>
                    <img
                        className="caroussel-arrow-left"
                        src={arrowLeft}
                        onClick={prevPicture}
                        alt="Afficher l'aperçu du logement précédent"
                    />
                    <img
                        className="caroussel-arrow-right"
                        src={arrowRight}
                        onClick={nextPicture}
                        alt="Afficher l'aperçu du logement suivant"
                    />
                    <p className="caroussel-counter">
                        {pictureIndex + 1}/{activeLogement.pictures.length}
                    </p>
                </>
            )}
        </div>
    );
};

export default Caroussel;