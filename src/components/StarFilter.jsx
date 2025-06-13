// StarFilter.jsx
import { Rating } from "react-simple-star-rating";

export default function StarFilter({ ratingValue, onRatingChange }) {
  // Función para limpiar el filtro (0 estrellas)
  const resetFilter = () => {
    onRatingChange(0);
  };

  return (
    <div className="my-4 text-center">
      <h2>Filtra por rating mínimo</h2>
      <h5 className="text-muted mb-3">
        {ratingValue > 0
          ? `Rating seleccionado: ${(ratingValue / 20).toFixed(1)} / 5`
          : "Sin filtro aplicado"}
      </h5>

      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <Rating
          onClick={onRatingChange}
          ratingValue={ratingValue}
          size={30}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          showTooltip
          tooltipArray={["Muy malo", "Malo", "Regular", "Bueno", "Excelente"]}
        />

        {ratingValue > 0 && (
          <button onClick={resetFilter} className="btn btn-outline-secondary">
            Limpiar filtro
          </button>
        )}
      </div>
    </div>
  );
}
