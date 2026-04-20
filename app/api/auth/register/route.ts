import { users } from "../data";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  users.push({ email, password });

  return Response.json({ message: "Compte créé" });
}