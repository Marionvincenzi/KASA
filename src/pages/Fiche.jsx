
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import "./Fiche.css";

const Logement = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeLogement, setActiveLogement] = useState(null);
    
    useEffect(() => {
        const index = logements.findIndex((logement) => logement.id === id);
        if (index < 0) {
            return navigate("/NotFound")
        }
        setActiveLogement(logements[index]);

    }, [id, navigate]);

 return (
    <div className="logement-container">
        <h1>{activeLogement.title}</h1>
        <p>{activeLogement.description}</p>

        {activeLogement.equipements && activeLogement.equipements.length > 0 && (
            <ul className="equipements-list">
                {activeLogement.equipements.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                ))}
            </ul>
        )}
    </div>
 )
}

export default Logement