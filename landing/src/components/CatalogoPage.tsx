// src/components/CatalogoPage.tsx
import React from 'react';
import { SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react';

interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  imagen: string;
}

const productosEjemplo: Producto[] = [
  {
    id: 1,
    nombre: 'Creatina Birdman',
    descripcion: 'Alta calidad para potenciar tu fuerza',
    precio: 29.99,
    imagen: '/landing/imagenes/creatina_catalogo.jpg',
  },
  {
    id: 2,
    nombre: 'Proteína IsoFlex',
    descripcion: 'Proteína de rápida absorción',
    precio: 39.99,
    imagen: '/landing/imagenes/proteina_catalogo.jpg',
  },
  {
    id: 3,
    nombre: 'Preworkout GAT',
    descripcion: 'Energía y enfoque en cada entrenamiento',
    precio: 34.99,
    imagen: '/landing/imagenes/preworkout_catalogo.jpg',
  },
];

const CatalogoPage = () => {
  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center">
        Catálogo de Productos
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {productosEjemplo.map((producto) => (
          <Box
            key={producto.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            _hover={{ boxShadow: 'md' }}
          >
            <Image src={producto.imagen} alt={producto.nombre} borderRadius="md" />
            <Text mt={4} fontSize="xl" fontWeight="bold">
              {producto.nombre}
            </Text>
            <Text mt={2}>{producto.descripcion}</Text>
            <Text mt={2} fontSize="lg" color="ui.main" fontWeight="semibold">
              ${producto.precio}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CatalogoPage;
