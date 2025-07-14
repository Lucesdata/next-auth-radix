import { Button } from '@radix-ui/themes';
import { BookmarkIcon } from '@radix-ui/react-icons';
import React from 'react';

function LoginPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>LoginPage</h1>
      <Button variant="solid" color="indigo">
        <BookmarkIcon style={{ marginRight: '8px' }} />
        Iniciar sesión
      </Button>
    </div>
  );
}

export default LoginPage;
