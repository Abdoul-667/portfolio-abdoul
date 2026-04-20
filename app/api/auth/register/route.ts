let users: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json({ error: "Champs requis" }, { status: 400 });
  }

  const exists = users.find(u => u.email === email);

  if (exists) {
    return Response.json({ error: "Utilisateur existe déjà" }, { status: 400 });
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
  };

  users.push(newUser);

  return Response.json({ message: "Inscription réussie" });
}