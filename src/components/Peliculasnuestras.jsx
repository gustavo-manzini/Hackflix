import React from "react";

const peliculasManuales = [
  {
    id: 1,
    title: "Hackers",
    // poster_path: "/hacker.jpg", // Usa la ruta de tu imagen local o una URL
    vote_average: 8.2,
    overview: "Un grupo de jóvenes hackers se enfrenta a una gran corporación.",
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
    // poster_path: "/mrrobot.jpg",
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
  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center text-white">Películas Nuestras</h2>
      <div className="row">
        {peliculasManuales.map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 movie-card-hover">
              <img
                src={movie.poster_path}
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
                <p className="card-text">{movie.overview}</p>
                <span className="badge bg-danger">⭐ {movie.vote_average}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculasnuestras;
