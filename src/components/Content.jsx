import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // <-- Import framer-motion aquí
import headerImg from "../assets/Baner.png";
import StarFilter from "./StarFilter";
import SearchBar from "./SearchBar";
import MovieModal from "./MovieModal";
import Pelicuasnuestras from "./Peliculasnuestras"; // <-- Importa el componente Pelis

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Content() {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRatingChange = (newRating) => {
    let stars = newRating <= 5 ? newRating : newRating / 20;
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

  const uniqueMovies = Array.from(
    new Map(movies.map((movie) => [movie.id, movie])).values()
  );

  const filteredMovies = uniqueMovies.filter(
    (movie) =>
      movie.vote_average >= minRating * 2 &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className={isModalOpen ? "blur-background" : ""}>
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
                <motion.div
                  key={movie.id}
                  className="col-md-6 col-lg-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }} // opcional: un pequeño efecto hover
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(movie)}
                >
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
                </motion.div>
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
      </div>

      {/* Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Content;
