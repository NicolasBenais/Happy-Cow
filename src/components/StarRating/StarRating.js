import StarRatingComponent from "react-star-rating-component";

export default function StarRating({ rating }) {
  return (
    <StarRatingComponent
      name="app6"
      starColor="#FEDB5A"
      emptyStarColor="#FEDB5A"
      value={rating}
      renderStarIcon={(index, value) => {
        return (
          <span>
            <i className={index <= value ? "fas fa-star" : "far fa-star"} />
          </span>
        );
      }}
      renderStarIconHalf={() => {
        return (
          <span>
            <span style={{ position: "absolute" }}>
              <i className="far fa-star" />
            </span>
            <span>
              <i className="fas fa-star-half" />
            </span>
          </span>
        );
      }}
    />
  );
}
