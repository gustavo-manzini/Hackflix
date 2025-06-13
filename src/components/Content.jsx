import movies from "../data/movies";
import { Rating } from "react-simple-star-rating";
import React, { useState } from "react";
import headerImg from "../assets/Baner.png";
import StarFilter from "./StarFilter";


function Content() {
  const [minRating, setMinRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) => movie.vote_average * 20 >= minRating
  );

  return (
    <>
      <div className="full-width-banner">
        <img src={headerImg} alt="Hackflix Banner" />
      </div>

   <StarFilter ratingValue={minRating} onRatingChange={setMinRating} />

      <div className="container my-4">
        <h2 className="mb-4 text-center">Películas</h2>

        <div className="row">
          {filteredMovies.slice(0, 300).map((movie) => (
            <div key={movie.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 movie-card-hover">
                <img
                  src={movie.poster_path}
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
                    ratingValue={movie.vote_average * 20}
                    size={24}
                    readonly
                    fillColor="orange"
                    emptyColor="lightgray"
                  />
                  <p className="card-text mt-2">
                    Puntaje:{" "}
                    {typeof movie.vote_average === "number"
                      ? movie.vote_average.toFixed(1)
                      : "No disponible"}{" "}
                    /10
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="text-center">No hay películas con esta calificación</p>
        )}
      </div>
    </>
  );
}

export default Content;
