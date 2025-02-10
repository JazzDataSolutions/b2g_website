// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CatalogoPage from './components/CatalogoPage';
import Conocenos from './components/Conocenos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;