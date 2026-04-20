let testimonials = [
  { id: 1, name: "John", message: "Super projet !" },
];

export async function GET() {
  return Response.json(testimonials);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newTestimonial = {
    id: Date.now(),
    ...body,
  };
  testimonials.push(newTestimonial);
  return Response.json(newTestimonial);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  testimonials = testimonials.filter(t => t.id !== id);

  return Response.json({ success: true });
}