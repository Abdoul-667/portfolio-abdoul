let testimonials: any[] = [];

export async function GET() {
  return Response.json(testimonials);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message } = body;

  const newTestimonial = {
    id: Date.now(),
    name,
    message,
  };

  testimonials.push(newTestimonial);

  return Response.json({ message: "Ajouté" });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, message } = body;

  testimonials = testimonials.map(t =>
    t.id === id ? { ...t, message } : t
  );

  return Response.json({ message: "Modifié" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  testimonials = testimonials.filter(t => t.id !== id);

  return Response.json({ message: "Supprimé" });
}