// src/components/CatalogoPage.tsx
import React from 'react';
import { Box, Heading, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react';

// Interfaz para definir la forma de un producto
export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
}


// src/components/CatalogoPage.tsx
export interface CatalogoPageProps {
  productos: Producto[]; // obligatorio
}

// Interfaz para las propiedades del componente CatalogoPage
const CatalogoPage: React.FC<CatalogoPageProps> = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
      ))}
    </div>
  );
};

export default CatalogoPage;
