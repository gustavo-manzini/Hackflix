import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import headerImg from "../assets/Baner.png";
import StarFilter from "./StarFilter";
import SearchBar from "./SearchBar";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Content() {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleRatingChange = (newRating) => {
    console.log("Rating seleccionado (raw):", newRating);

    let stars;
    if (newRating <= 5) {
      stars = newRating;
    } else {
      stars = newRating / 20;
    }
    console.log("Estrellas calculadas:", stars);
    setMinRating(stars);
  };

  const fetchMovies = async (pageToLoad = 1) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageToLoad}`
      );
      const data = await response.json();
      if (data.results.length === 0) setHasMore(false);
      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.vote_average >= minRating * 2 &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="full-width-banner header-img-container">
        <img src={headerImg} alt="Hackflix" className="header-img" />
      </div>

      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      <StarFilter
        ratingValue={minRating * 20}
        onRatingChange={handleRatingChange}
      />

      <div className="container my-4">
        <h2 className="mb-4 text-center text-white">Películas</h2>

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
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">
              {movies.length === 0
                ? "Cargando películas...."
                : "Lo sentimos, no se encontraron películas con el rating solicitado."}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Content;
