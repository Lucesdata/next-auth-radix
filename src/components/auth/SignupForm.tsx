'use client';

import React, { useState } from 'react';
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
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || 'Error al registrar');
        setMessage(null);
      } else {
        setMessage('✅ Registro exitoso');
        setError(null);
        reset();
      }
    } catch (err) {
      setError('❌ Error de red');
      setMessage(null);
    }
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

        {message && (
          <Text size="2" color="green" align="center">
            {message}
          </Text>
        )}
        {error && (
          <Text size="2" color="red" align="center">
            {error}
          </Text>
        )}

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

