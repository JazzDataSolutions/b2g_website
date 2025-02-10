// src/components/Contacto.tsx
import React from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Interfaz para los datos del formulario de contacto
interface ContactoFormInputs {
  name: string;
  email: string;
  message: string;
}


const Contacto: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactoFormInputs>();

  // Función de envío tipada de forma explícita
  const onSubmit: SubmitHandler<ContactoFormInputs> = async (data: ContactoFormInputs) => {
    // Aquí se implementaría la lógica para enviar el correo o procesar el mensaje.
    console.log('Datos de contacto:', data);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Tu nombre"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            {...register("email", { required: "El correo es obligatorio" })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={!!errors.message}>
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea
            id="message"
            placeholder="Tu mensaje"
            {...register("message", { required: "El mensaje es obligatorio" })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Enviar mensaje
        </Button>
      </form>
    </Box>
  );
};

export default Contacto;
