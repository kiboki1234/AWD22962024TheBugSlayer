// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css"; // Archivo de estilos opcional para la barra de navegación
import logoIcon from "./assets/img/logonav.png"; // Importar la imagen del logo
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <img className="logo-navbar" src={logoIcon} alt="logo" />
          <Link className="navbar-brand" to="/">
            <strong>CPED</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/debate-models">
                  Modelos de Debate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  

export default Navbar;
