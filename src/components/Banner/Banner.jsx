import image from "../../assets/banner.png"
import "./Banner.css"

function Banner () {
  return (
    <div className="banner">
        <h1 className="title-text">Chez vous, partout et ailleurs</h1>
        <img className="banner-img" src={image} alt="bannière" />
    </div>
  )
}

export default Banner