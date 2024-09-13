import Banner from "../components/Banner/Banner";
import LogementList from "../components/LogementList/LogementList"
import logements from "../datas/logement.json";
import "../App.css"
const Home = () => {
  return (    
    <>
    <Banner />
    <main>
    <LogementList logements={logements}/>
    </main>
    </>
  )
}

export default Home