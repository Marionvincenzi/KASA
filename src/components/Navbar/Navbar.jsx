import "./Navbar.css"
import logo from "../../assets/LOGO.png"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img className="logo" src={logo} alt="Logo Kasa" />
        </div>
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/aPropos"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            À Propos
          </NavLink>
    </nav>
  )
}

export default Navbar