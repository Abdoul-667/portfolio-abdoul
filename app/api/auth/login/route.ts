export async function POST(req: Request) {
  const { email, password } = await req.json();

  // utilisateur de test FIXE
  if (email === "test@test.com" && password === "1234") {
    return Response.json({ message: "Connexion réussie" });
  }

  return Response.json({ error: "Identifiants incorrects" });
}