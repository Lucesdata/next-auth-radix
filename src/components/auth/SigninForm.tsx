'use client';

import React from 'react';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
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
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.ok) {
      router.push('/'); // Redirige al Home u otra página protegida
    } else {
      alert('Credenciales inválidas');
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




