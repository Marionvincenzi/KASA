import image from "../../assets/banner.png"
import "./Banner.css"

function Banner () {
  return (
    <div className="banner">
        <img className="banner-img" src={image} alt="bannière" />
        <div className="overlay"></div>
        <h1 className="title-text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner