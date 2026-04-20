export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Technology Catalog Website",
      description: "Site web dynamique connecté à une base de données avec Node.js et SQL"
    },
    {
      id: 2,
      title: "Anime Streaming Website",
      description: "Site interactif avec catalogue d’anime et navigation fluide"
    },
    {
      id: 3,
      title: "Gestionnaire de bibliothèque",
      description: "Application en C# pour gérer des livres avec interface console"
    }
  ];

  return Response.json(projects);
}