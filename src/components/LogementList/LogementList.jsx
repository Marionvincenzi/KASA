import logements from "../../datas/logement.json";
import LogementCard from "../logement-card/LogementCard"
import "./LogementCard.css"

const LogementList = () => {
    if (!logements || logements.length === 0) {
        return <p>Aucun logement à afficher</p>
    }
    return (
        <div className="logements-list">
            {logements.map((logement) => (
                <LogementCard logement={logement} key={logement.id} />
            ))}
        </div>
    )
}

export default LogementList