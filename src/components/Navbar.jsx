import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div className="container-fluid">
        <li className="navbar-brand title">
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Hackflix
          </Link>
        </li>
        <button
          className="navbar-toggler navbar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link "
              aria-current="page"
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to="../components/Nosotros"
            >
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
