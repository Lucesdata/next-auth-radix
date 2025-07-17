import { NextResponse } from "next/server";

// Usuario simulado (normalmente esto vendría de una base de datos)
const user = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  password: "123456", // En un entorno real, la contraseña estaría encriptada
};

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (email === user.email && password === user.password) {
    return NextResponse.json(user);
  }

  return new NextResponse("Credenciales inválidas", { status: 401 });
}

export async function GET() {
  return new Response("Método GET no permitido en este endpoint", {
    status: 405,
  });
}
