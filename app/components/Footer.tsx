export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p className="mb-2">© 2026 Abdoul Wahab Maïga</p>

      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/Abdoul-667"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/abdoul-wahab-maiga-b45666384/"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/wahab4real_"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}