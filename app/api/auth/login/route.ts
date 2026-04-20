export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json({ error: "Champs requis" }, { status: 400 });
  }

  // ⚠️ TEMPORAIRE (on améliore après)
  if (email === "test@test.com" && password === "1234") {
    return Response.json({ message: "Connexion réussie" });
  }

  return Response.json({ error: "Identifiants invalides" }, { status: 401 });
}