import React from "react";

// Mapa local de géneros (TMDB puede tener más, pero estos son los más comunes)
const genreMap = {
  28: "Acción",
  12: "Aventura",
  16: "Animación",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familiar",
  14: "Fantasía",
  36: "Historia",
  27: "Terror",
  10402: "Música",
  9648: "Misterio",
  10749: "Romance",
  878: "Ciencia Ficción",
  10770: "TV Movie",
  53: "Suspenso",
  10752: "Guerra",
  37: "Western",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  backgroundColor: "#1c1c1c",
  color: "#fff",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "90%",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  boxShadow: "0 0 20px rgba(0,0,0,0.7)",
};

const imageStyle = {
  width: "40%",
  objectFit: "cover",
};

const contentStyle = {
  padding: "20px",
  flex: 1,
};

const closeButtonStyle = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 12px",
  cursor: "pointer",
  marginTop: "15px",
};

export default function MovieModal({ movie, isOpen, onClose }) {
  if (!isOpen || !movie) return null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const genreNames = movie.genre_ids
    ?.map((id) => genreMap[id])
    .filter(Boolean)
    .join(", ");

  const starCount = Math.round(movie.vote_average / 2);

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2>{movie.title}</h2>

          {/* Rating visual */}
          <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
            {"⭐".repeat(starCount)}
            {"☆".repeat(5 - starCount)}
            <span style={{ marginLeft: "10px", color: "#bbb" }}>
              ({movie.vote_average.toFixed(1)} / 10)
            </span>
          </p>

          {/* Géneros y año */}
          <p style={{ fontStyle: "italic", color: "#ccc" }}>
            {releaseYear} • {genreNames || "Sin género"}
          </p>

          {/* Descripción */}
          <p style={{ marginTop: "10px" }}>
            {movie.overview || "Sin descripción disponible."}
          </p>

          <button style={closeButtonStyle} onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
