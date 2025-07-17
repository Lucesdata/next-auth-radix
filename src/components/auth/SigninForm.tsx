'use client';

import React from 'react';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormData = {
  email: string;
  password: string;
};

function SigninForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Puedes guardar el usuario o token en localStorage, context, etc.
        console.log('Usuario autenticado:', result.user);

        // Ejemplo: guardar en localStorage
        localStorage.setItem('user', JSON.stringify(result.user));

        // Redirigir
        router.push('/');
      } else {
        alert(result.message || 'Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en login:', error);
      alert('Ocurrió un error en el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4" maxWidth="300px">
        <Text as="p" weight="bold" size="5" mb="2">
          Sign In
        </Text>

        {/* Email */}
        <Flex direction="column" gap="1">
          <Label htmlFor="email">Email</Label>
          <TextField.Root
            id="email"
            placeholder="email@domain.com"
            variant="surface"
            {...register('email', {
              required: 'Email requerido',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Formato de email inválido',
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
          <Label htmlFor="password">Password</Label>
          <TextField.Root
            id="password"
            type="password"
            placeholder="********"
            variant="surface"
            {...register('password', {
              required: 'Contraseña requerida',
              minLength: {
                value: 6,
                message: 'Debe tener al menos 6 caracteres',
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
          Sign In
        </Button>

        {/* Link a Signup */}
        <Flex justify="between" align="center">
          <Text size="2">Don't have an Account?</Text>
          <Link href="/auth/register" weight="bold" color="indigo">
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </form>
  );
}

export default SigninForm;





