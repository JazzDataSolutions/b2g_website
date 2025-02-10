// frontend/src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Puedes extraer los estilos relevantes de style.css

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light fondo-nav">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="/landing/imagenes/logo.png" alt="Logo Brain2Gain" />
      </Link>
      {/* Botón de hamburguesa y menú */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="menu02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="/catalogo">Catálogo</Link>
            <a
              className="nav-link dropdown-toggle dropdown-toggle-split"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/catalogo/creatina">Creatina</Link></li>
              <li><Link className="dropdown-item" to="/catalogo/proteina">Proteína</Link></li>
              <li><Link className="dropdown-item" to="/catalogo/preworkout">Preworkout</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nosotros">Conócenos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

