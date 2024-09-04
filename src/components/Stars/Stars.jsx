import "../Stars/Stars.css"; // Assurez-vous que le CSS est bien configuré

const Stars = ({ stars }) => {
  const totalStars = 5;

  return (
    <div className="star">
      {[...Array(totalStars)].map((_, index) => {
        // Utilisation des classes correctes pour Font Awesome
        const starClass = index < stars ? "fa-solid fa-star" : "fa-regular fa-star";

        return (
          <i
            key={index}
            className={`fa ${starClass}`} // Appliquer la classe complète
            aria-hidden="true"
          ></i>
        );
      })}
    </div>
  );
};

export default Stars;
