import logements from "../../datas/logement.json";
import LogementCard from "../logement-card/LogementCard";

const LogementsList = () => {
  return (
    <div className="logements-list">
      <main>
        <section id="logements" className="logements">
          {logements.map((logement) => (
            <LogementCard key={logement.id} logement={logement} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default LogementsList;
