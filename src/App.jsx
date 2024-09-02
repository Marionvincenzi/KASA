import Navbar from './components/Navbar/Navbar'
import Banner from "./components/Banner/Banner"
import LogementsList from './components/LogementList/LogementList'
import "./App.css"
function App () {
  return (
    <div>
    <Navbar />
    <Banner />
    <LogementsList />
    </div>
  )
}

export default App