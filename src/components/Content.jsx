import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import headerImg from "../assets/Baner.png";
import StarFilter from "./StarFilter";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Content() {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0); 

const handleRatingChange = (newRating) => {
  console.log("Rating seleccionado (raw):", newRating);
  // Si el rating es menor o igual a 5 (entero), asume que es estrellas directas
  let stars;
  if (newRating <= 5) {
    stars = newRating;
  } else {
    // Si es múltiplo de 20 (20,40,60...), convierte a estrellas
    stars = newRating / 20;
  }
  console.log("Estrellas calculadas:", stars);
  setMinRating(stars);
};

  useEffect(() => {
   const fetchMovies = async () => {
  try {
    const allMovies = [];

    for (let page = 1; page <= 3; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
      );
      const data = await response.json();
      allMovies.push(...data.results);
    }

    setMovies(allMovies);
  } catch (error) {
    console.error("Error al obtener películas:", error);
  }
};


    fetchMovies();
  }, []);

  // Filtrar películas con vote_average >= minRating * 2
  const filteredMovies = movies.filter(
    (movie) => movie.vote_average >= minRating * 2
  );

  return (
    <>
      <div className="full-width-banner">
        <img src={headerImg} alt="Hackflix Banner" />
      </div>

      <StarFilter ratingValue={minRating * 20} onRatingChange={handleRatingChange} />

      <div className="container my-4">
        <h2 className="mb-4 text-center">Películas</h2>

        <div className="row">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 movie-card-hover">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "ruta/alternativa.jpg";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                      Año: {new Date(movie.release_date).getFullYear()}
                    </p>
                    <Rating
                      ratingValue={movie.vote_average * 10}
                      size={24}
                      readonly
                      fillColor="orange"
                      emptyColor="lightgray"
                    />
                    <p className="card-text mt-2">
                      Puntaje: {movie.vote_average.toFixed(1)} /10
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">
              {movies.length === 0
                ? "Cargando películas..."
                : "Lo sentimos, no se encontraron películas con el rating solicitado."}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Content;
