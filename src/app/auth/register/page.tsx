'use client';

import React from 'react';
import { Container, Card, Heading, Flex } from '@radix-ui/themes';
import SignupForm from '@/components/auth/SignupForm';

export default function RegisterPage() {
  return (
    <Container size="1" height="100%" className="p-3 md:p-0">
      <Flex className="h-screen w-full items-center justify-center">
        <Card className="w-full max-w-sm p-5">
          <Heading as="h1" size="5" mb="4">
            Crear cuenta
          </Heading>
          <SignupForm />
        </Card>
      </Flex>
    </Container>
  );
}
