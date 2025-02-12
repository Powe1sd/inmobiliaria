import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ventas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alquiler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Permutar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Novedades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Asesores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nuestra Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
