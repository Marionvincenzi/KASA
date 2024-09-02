import "./Navbar.css"
import logo from "../../assets/LOGO.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img className="logo" src={logo} alt="Logo Kasa" />
        </div>
        <div>Accueil</div>
        <div>A propos</div>
    </nav>
  )
}

export default Navbar