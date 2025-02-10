// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Definir los colores básicos
    black: '#000000',
    white: '#FFFFFF',
    ui: {
      main: '#C2E02A',         // Por ejemplo, el color principal
      secondary: '#333333',    // Un color secundario
      // Agrega más según el branding
    },
  },
  // Puedes extender tipografías, estilos globales, etc.
});

export default theme;
