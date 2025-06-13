// StarFilter.jsx
import { Rating } from "react-simple-star-rating";

export default function StarFilter({ ratingValue, onRatingChange }) {
  return (
    <div className="my-4 text-center">
      <h2>Filtra por rating:</h2>
      <Rating
        onClick={onRatingChange}
        ratingValue={ratingValue}
        size={30}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
        // showTooltip
        // tooltipArray={["Muy malo", "Malo", "Regular", "Bueno", "Excelente"]}
      />
    </div>
  );
}
