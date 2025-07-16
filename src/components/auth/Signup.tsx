'use client';

import React from 'react';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';

function Signup() {
  return (
    <form>
      <Flex direction="column" gap="4" maxWidth="300px">
        <Flex direction="column" gap="1">
          <Label htmlFor="name">Nombre completo</Label>
          <TextField.Root
            id="name"
            placeholder="Tu nombre completo"
            variant="surface"
          />
        </Flex>

        <Flex direction="column" gap="1">
          <Label htmlFor="email">Correo electrónico</Label>
          <TextField.Root
            id="email"
            placeholder="email@dominio.com"
            variant="surface"
          />
        </Flex>

        <Flex direction="column" gap="1">
          <Label htmlFor="password">Contraseña</Label>
          <TextField.Root
            id="password"
            type="password"
            placeholder="********"
            variant="surface"
          />
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

export default Signup;
