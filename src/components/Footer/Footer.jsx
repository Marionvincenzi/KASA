import "../Footer/Footer.css"
import logo from "../../assets/logoblack.png"

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} alt="logo kasa footer" />
        <p className="copyright">
        © 2020 Kasa. All rights reserved
        </p>
    </footer>
  )
}

export default Footer