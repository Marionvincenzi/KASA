import "../Stars/Stars.css"

const Stars = ({ stars }) => {
    const totalStars = 5;

    return (
        <div className="star">
            {[...Array(totalStars)].map((_, index) => {
                return (
                    <i 
                    key={index}
                    className={`fa-xs fa star ${
                        index < stars ? "fa-solid" : "fa-regular"
                    }`}
                    aria-hidden="true"></i>
                )
            })}
        </div>
    )
}

export default Stars