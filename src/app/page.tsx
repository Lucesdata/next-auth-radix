// src/app/page.tsx
'use client'

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Home</h1>
      {session ? (
        <p>Bienvenido, {session.user?.email}</p>
      ) : (
        <p>No has iniciado sesión</p>
      )}
    </div>
  );
}
