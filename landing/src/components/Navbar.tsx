// src/components/Navbar.tsx
import React from 'react';
import { Box, Flex, Link, Button, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="black"
      color="white"
      align="center"
      justify="space-between"
      p={4}
      //border="2px solid red" // Para depurar
    >
      <Box>
        <Image src="/landing/imagenes/logo.png" alt="Logo Brain2Gain" height="30px" mx={2} />
      </Box>
      <Flex gap={4}>
        <Link as={RouterLink} to="/">Inicio</Link>
        <Link as={RouterLink} to="/catalogo">Catálogo</Link>
        <Link as={RouterLink} to="/conocenos">Conócenos</Link>
        <Link as={RouterLink} to="/contacto">Contacto</Link>
      </Flex>
      <Box>
        <Button as={RouterLink} to="/login" colorScheme="green">
          Iniciar sesión
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;