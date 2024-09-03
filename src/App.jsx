import Navbar from './components/Navbar/Navbar'
import Banner from "./components/Banner/Banner"
import LogementsList from './components/LogementList/LogementList'
import Footer from './components/Footer/Footer'
import Propos from './components/Apropos/aPropos'
import "./App.css"

function App () {
  return (
    <div>
    <Navbar />
    <Banner />
    <LogementsList />
    <Footer />
    <Propos />
    </div>
  )
}

export default App