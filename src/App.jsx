import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import React from "react";
import asientos from "./assets/asientos.png";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo con opacidad */}
      <img
        src={asientos}
        alt="asientos"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          // Ajusta la opacidad aquí
          zIndex: -1,
          pointerEvents: "none",
          filter: "brightness(0.9)",
        }}
      />
      <div className="fade"></div>
      <div className="content-overlay">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
