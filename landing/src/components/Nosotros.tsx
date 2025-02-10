// frontend/src/components/Nosotros.tsx
import React from "react";
import Navbar from "./Navbar";

const Nosotros: React.FC = () => (
  <div>
    <Navbar />
    <header className="fundadores">
      {/* Extrae y adapta el HTML del archivo conocenos.html */}
      <div className="container">
        {/* Reestructura en JSX, por ejemplo */}
        <h3>FUNDADORES</h3>
        <p>
          Jaziel, <strong>ingeniero apasionado</strong> y Joaquín,
          <strong> ingeniero ambiental</strong> se unieron por su pasión...
        </p>
      </div>
    </header>
  </div>
);

export default Nosotros;
