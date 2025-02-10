// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogoPage from './components/CatalogoPage';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import Contacto from './components/Contacto';
import { Producto } from './components/CatalogoPage'; // o donde tengas definido el tipo

const productosEjemplo: Producto[] = [
  { 
    id: 1, 
    nombre: "Producto A", 
    precio: 100, 
    imagen: "/ruta/a/imagenA.jpg",
    descripcion: "Descripción del producto A"  // propiedad agregada
  },
  { 
    id: 2, 
    nombre: "Producto B", 
    precio: 200, 
    imagen: "/ruta/a/imagenB.jpg",
    descripcion: "Descripción del producto B"  // propiedad agregada
  }
];

const usuarioEjemplo = { userName: "Juan", notifications: 5 };

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogoPage productos={productosEjemplo} />} />
        <Route path="/catalogo/*" element={<CatalogoPage productos={productosEjemplo} />} />
        <Route path="/dashboard" element={<Dashboard userName={usuarioEjemplo.userName} notifications={usuarioEjemplo.notifications} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
