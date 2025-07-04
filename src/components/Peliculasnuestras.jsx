import { resetWarningCache } from "prop-types";
import React, { useState } from "react";

const peliculasManuales = [
  {
    id: 1,
    title: "Misterio abordo",
    poster_path: "  /favoritas/misterio.jpg",
    vote_average: 8.2,
    sinopsis: "Un grupo de jóvenes hackers se enfrenta a una gran corporación.",
    reseña: "Misterio abordo es una película emocionante que combina acción y tecnología.",
  },
  {
    id: 2,
    title: "Matrix",
    // poster_path: "/matrix.jpg",
    vote_average: 8.7,
    overview:
      "Un hacker descubre la verdad sobre su realidad y su papel en la guerra contra sus controladores.",
  },
  {
    id: 3,
    title: "Mr. Robot",
    //  poster_path: "/mrrobot.jpg",
    vote_average: 8.5,
    overview:
      "Un joven programador trabaja como ingeniero de ciberseguridad y hacker vigilante.",
  },
  {
    id: 4,
    title: "Tron",
    // poster_path: "/tron.jpg",
    vote_average: 7.8,
    overview:
      "Un programador es transportado al mundo digital y debe luchar por su vida.",
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
    <div className="container mt-5  my-4">
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
                <p className="card-text">{movie.sinopsis}</p>
                <span className="badge bg-danger">⭐ {movie.vote_average}</span>
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
