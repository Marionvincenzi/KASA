

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import "./Fiche.css";

const Logement = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ setActiveLogement] = useState(null);
    const [loading, setLoading] =useState(true);
    useEffect(() => {
        const index = logements.findIndex((logement) => logement.id === id);
        if (index < 0) {
            return navigate("/NotFound")
        }
        setActiveLogement(logements[index]);
        setLoading(false);
    }, [id, navigate]);

    return loading ? (
        <div className="loader-container">
            <span className="loader"></span>
        </div>
    ) : (
        <div>

        </div>
    )
}

export default Logement