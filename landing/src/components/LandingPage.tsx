// Ejemplo en LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Bienvenido a Brain2Gain</h1>
      <button onClick={handleLoginClick}>Iniciar sesión</button>
    </div>
  );
};

export default LandingPage;
