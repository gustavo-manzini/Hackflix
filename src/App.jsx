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
        backgroundImage: `url(${asientos})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {/* 🎯 Fade diminuto entre header y fondo */}
      <div
        style={{
             position: "absolute",
    top: 0,
    width: "100%",
    height: "100px", // 🌒 Un poco más de altura
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(122, 7, 7, 0))", // 🎨 Más opacidad
    zIndex: 1,
        }}
      ></div>

      {/* Contenido sobre el fondo */}
      <div
        style={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          minHeight: "100vh",
          paddingBottom: "150px",
          zIndex: 2,
        }}
      >
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
