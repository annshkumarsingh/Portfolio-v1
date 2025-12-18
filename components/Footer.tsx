export default function Footer() {
  return (
    <footer className="mt-32 md:pb-10">
      <div
        className="
          max-w-6xl mx-auto px-6 py-6
          rounded-2xl
          bg-white/60 backdrop-blur-xl
          shadow-sm
          flex flex-col md:flex-row
          justify-between items-center gap-4
        "
      >
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Annsh Kumar Singh. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href="https://github.com/annshkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/annshkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:annshkumarsingh@gmail.com"
            className="hover:opacity-70 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}