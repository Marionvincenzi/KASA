
import { useState } from "react";
import "./Collapse.css";

const Collapse = ({ title, content, }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse-container">
      <h3
        className="collapse-container__title"
        onClick={toggleCollapse}
      >
        {title}
        <div className="collapse-container__arrow-container">
        
        <i className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
      </h3>
      <div
        className={
          isOpen
            ? "collapse-container__content is-open"
            : "collapse-container__content"
        }
      >
        <div
          className={`collapse-container__content__text ${
            isOpen ? "collapse-container__content__open" : ""
          }`}
        >
          {Array.isArray(content) ? (
            <ul>
              {content.map((content, i) => (
                <li key={content + "-" + i}>{content}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;