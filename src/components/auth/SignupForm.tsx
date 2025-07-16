'use client';

import React from 'react';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Datos enviados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4" maxWidth="300px">
        <Flex direction="column" gap="1">
          <Label htmlFor="name">Nombre completo</Label>
          <TextField.Root
            id="name"
            placeholder="Tu nombre completo"
            variant="surface"
            {...register('name', { required: 'Nombre requerido' })}
          />
          {errors.name && (
            <Text size="1" color="red">
              {errors.name.message}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="1">
          <Label htmlFor="email">Correo electrónico</Label>
          <TextField.Root
            id="email"
            placeholder="email@dominio.com"
            variant="surface"
            {...register('email', { required: 'Email requerido' })}
          />
          {errors.email && (
            <Text size="1" color="red">
              {errors.email.message}
            </Text>
          )}
        </Flex>

        <Flex direction="column" gap="1">
          <Label htmlFor="password">Contraseña</Label>
          <TextField.Root
            id="password"
            type="password"
            placeholder="********"
            variant="surface"
            {...register('password', { required: 'Contraseña requerida' })}
          />
          {errors.password && (
            <Text size="1" color="red">
              {errors.password.message}
            </Text>
          )}
        </Flex>

        <Button type="submit" variant="solid" color="indigo">
          Crear cuenta
        </Button>

        <Text size="2" align="center">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/auth/login" weight="bold" color="indigo">
            Iniciar sesión
          </Link>
        </Text>
      </Flex>
    </form>
  );
}

export default SignupForm;

