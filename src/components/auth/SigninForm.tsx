'use client';

import React from 'react';
import { Flex, TextField, Button, Text, Link } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';

function SigninForm() {
  return (
    <form>
      <Flex direction="column" gap="4" maxWidth="300px">
        <Flex direction="column" gap="1">
          <Label htmlFor="email">Email</Label>
          <TextField.Root
            id="email"
            placeholder="email@domain.com"
            variant="surface"
          />
        </Flex>

        <Flex direction="column" gap="1">
          <Label htmlFor="password">Password</Label>
          <TextField.Root
            id="password"
            type="password"
            placeholder="********"
            variant="surface"
          />
        </Flex>

        <Button type="submit" variant="solid" color="indigo">
          Sign In
        </Button>

        {/* Link en una línea horizontal */}
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




