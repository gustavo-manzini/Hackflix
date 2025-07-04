import { resetWarningCache } from "prop-types";
import React, { useState } from "react";

const peliculasManuales = [
  {
    id: 1,
    title: "Misterio abordo",
    poster_path: "/favoritas/misterio.jpg",
    vote_average: 8.2,
    overview:
      "Misterio abordo es una pélicula que cumple con su objetivo principal: entretener. Con una propuesta sencilla pero efectiva. La cinta ofrece momentos divertidos y un ritmo ágil. Adam Sandler y Jennifer Aniston tienen buena química, lo cual ayuda a mantener el interés inclusive cuando el guion cae en situaciones poco creíbles. Sin embargo, aunque intenta homenajear al género de '¿Quien lo hizo?', su trato al misterio es superficial, con giros predecibles y un desarrollo de personaje bastante limitado. El humor, característico del estilo de Sandler, puede no ser el gusto de todos, ya que a veces suele recurrir a bromas simples o exageradas. Además, se apoya mucho en estereotipos culturales que podrian resultar forzados o poco originales.",
  },
  {
    id: 2,
    title: "El Padrino",
    poster_path: "/favoritas/ElPadrino.webp",
    vote_average: 8.7,
    overview:
      "Una Excelente película ganadora de varios premios, consagrando a un joven Al Pacino como (Michael Corleone) en unos de sus primeros films protagónicos, nos cuenta una historia de drama, crimen gangster italoamericano usando como eje principal a un soldado volviendo de la segunda guerra mundial envuelto en tramas de traición y complot contra la familia Corleone por la defensa del poder criminal en Nueva York.",
  },
  {
    id: 3,
    title: "Top Gun: Maverick",
    poster_path: "/favoritas/topgun.jpg",
    vote_average: 8.5,
    overview:
      "Un La película es un acierto como secuela, galardonada con decenas de premios en varias categorías resaltando el avance generacional que tiene en comparación a la primera entrega. Los efectos, los sonidos y los planos son un espectáculo visual y auditivo que no deja a nadie insatisfecho. Pero eso no tapa los fallos argumentales, que se pueden llegar a ignorar, cuando se analizan las situaciones que se desarrollan. En taquilla fue un éxito, como secuela muy emotiva y en entretenimiento es un gran acierto sin importar el público que sea",
  },

];

function Peliculasnuestras() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container  mt-5  my-4">
      <h2 className="mb-4 text-center text-white">Películas Nuestras</h2>
      <div className="row">
        {peliculasManuales.map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-3 mb-4">
            <div
              className="card h-100 movie-card-hover"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(movie)}
            >
              <img
                src={
                  movie.poster_path && movie.poster_path.trim() !== ""
                    ? movie.poster_path.trim()
                    : undefined
                }
                className="card-img-top"
                alt={movie.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=Sin+Imagen";
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.length > 80
                    ? movie.overview.slice(0, 80) + "..."
                    : movie.overview}
                </p>
                <span className="badge bg-danger">⭐ {movie.vote_average}</span>
                <button
                  className="btn btn-primary btn-sm mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(movie);
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {showModal && selectedMovie && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMovie.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={
                    selectedMovie.poster_path &&
                    selectedMovie.poster_path.trim() !== ""
                      ? selectedMovie.poster_path.trim()
                      : undefined
                  }
                  className="img-fluid mb-3"
                  alt={selectedMovie.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x450?text=Sin+Imagen";
                  }}
                />
                <p>{selectedMovie.overview}</p>
                <span className="badge bg-danger">
                  ⭐ {selectedMovie.vote_average}
                </span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Peliculasnuestras;
