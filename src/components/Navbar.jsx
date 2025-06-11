function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary text-primary-emphasis">
      <div className="container-fluid">
        <a className="navbar-brand title " href="#">
          Hackflix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active home" aria-current="page" href="#">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
