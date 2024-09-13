import Image from "../../assets/banner2.png";
import "../About/About.css";
import aboutContent from "../../datas/about-us.json";
import Collapse from "../Collapse/Collapse"

const APropos = () => {
  return (
    <div className="banner-about">
      <img className="banner-image" src={Image} alt="Bannière" />
      <div className="overlay-banner"></div>
      <div className="container-about">
        {aboutContent.map((aboutItem, index) => (
          <div key={aboutItem.id + "-" + index} className="about-collapse">
            <Collapse title={aboutItem.title} content={aboutItem.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default APropos;
