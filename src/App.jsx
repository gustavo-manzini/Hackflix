import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Nosotros from "./components/Nosotros";
import "./App.css";

import asientos from "./assets/asientos.png";
import Peliculasnuestras from "./components/Peliculasnuestras";

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
          zIndex: -1,
          pointerEvents: "none",
          filter: "brightness(0.9)",
        }}
      />
      <div className="fade"></div>
      <div className="content-overlay">
        <Navbar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/peliculasnuestras" element={<Peliculasnuestras />} />
          </Routes>
          
      </div>
    </div>
  );
}

export default App;
