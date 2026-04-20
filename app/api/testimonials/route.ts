let testimonials: any[] = [];

export async function GET() {
  return Response.json(testimonials);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message } = body;

  if (!name || !message) {
    return Response.json({ error: "Champs requis" }, { status: 400 });
  }

  const newTestimonial = {
    id: Date.now(),
    name,
    message,
  };

  testimonials.push(newTestimonial);

  return Response.json({ message: "Témoignage ajouté" });
}