import { Rating } from "react-simple-star-rating";

export default function StarFilter({ ratingValue, onRatingChange }) {
  const resetFilter = () => {
    onRatingChange(0);
  };

  return (
    <div className="my-4 text-center">
      <h2 className="text-white">Filtra por rating:</h2>
      <h5 className="text-white ">
        {ratingValue > 0
          ? `Rating seleccionado: ${(ratingValue / 20).toFixed(1)} / 5`
          : "Sin filtro aplicado"}
      </h5>

      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <Rating
          onClick={(rate) => {
            onRatingChange(rate);
          }}
          ratingValue={ratingValue}
          size={30}
          fillColor="orange"
          emptyColor="gray"
        />
        {ratingValue > 0 && (
          <button
            onClick={resetFilter}
            className="btn btn-outline-secondary text-white"
          >
            Limpiar filtro
          </button>
        )}
      </div>
    </div>
  );
}
