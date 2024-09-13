import "../Rating/rating.css"
import PropTypes from "prop-types"

const Rating = ({ rating }) => {
    const defaultStars = 5;
  
    return (
      <div className="rates">
        {[...Array(defaultStars)].map((_, index) => {
          return (
            <i
              key={index}
              className={`fa-xs fa-star ${
                index < rating ? "fa-solid" : "fa-regular"
              }`}
              aria-hidden="true"
            ></i>
          );
        })}
      </div>
    );
  };

  Rating.propTypes = {
    rating : PropTypes.number.isRequired,
  }

export default Rating;