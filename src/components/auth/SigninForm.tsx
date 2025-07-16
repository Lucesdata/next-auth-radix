'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';

type FormData = {
  email: string;
  password: string;
};

function SigninForm() {
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
        <Text as="p" weight="bold" size="5" mb="2">
          Iniciar sesión
        </Text>

        {/* Email */}
        <Flex direction="column" gap="1">
          <Label htmlFor="email">Correo electrónico</Label>
          <TextField.Root
            id="email"
            placeholder="email@dominio.com"
            variant="surface"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Correo no válido',
              },
            })}
          />
          {errors.email && (
            <Text size="1" color="red">
              {errors.email.message}
            </Text>
          )}
        </Flex>

        {/* Password */}
        <Flex direction="column" gap="1">
          <Label htmlFor="password">Contraseña</Label>
          <TextField.Root
            id="password"
            type="password"
            placeholder="********"
            variant="surface"
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'Mínimo 6 caracteres',
              },
            })}
          />
          {errors.password && (
            <Text size="1" color="red">
              {errors.password.message}
            </Text>
          )}
        </Flex>

        {/* Botón */}
        <Button type="submit" variant="solid" color="indigo">
          Iniciar sesión
        </Button>

        {/* Link a registro */}
        <Flex justify="between" align="center">
          <Text size="2">¿No tienes cuenta?</Text>
          <Link href="/auth/register" weight="bold" color="indigo">
            Regístrate
          </Link>
        </Flex>
      </Flex>
    </form>
  );
}

export default SigninForm;




