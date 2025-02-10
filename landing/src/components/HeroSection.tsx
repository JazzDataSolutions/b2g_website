// src/components/HeroSection.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/landing/imagenes/fondo.jpg')" // Ajusta la ruta si es necesario
      bgSize="cover"
      bgPos="center"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      <Box>
        <Heading fontSize="4xl" mb={4}>
        </Heading>
        <Text fontSize="xl">
        </Text>
      </Box>
    </Box>
  );
};

export default HeroSection;

