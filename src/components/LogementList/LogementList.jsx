import info from "../../datas/logement.json";
import { Link } from "react-router-dom";

const LogementsList = () => {
    return (
        <div className="logements-list">
            <main>
                <section id="logements" className="logements">
                    <article className="logements-cards">
                        {info.map((logement) => (
                            <div className="card" key={logement.id}>
                                <Link to={`/fiche/${logement.id}`}>
                                <div className="logements-container">
                                    <h2>{logement.title}</h2>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </article>
                </section>
            </main>
        </div>
    )
}

export default LogementsList;