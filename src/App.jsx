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
      <div className="fade"></div>

      <div className="content-overlay">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
