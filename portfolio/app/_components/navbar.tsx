import "../globals.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex flex-wrap max-w-6xl justify-center items-center gap-6 px-6 py-4 text-sm font-medium text-gray-600">
        <Link href="/" className="transition-colors hover:text-indigo-600">
          Home
        </Link>
        <Link href="/about" className="transition-colors hover:text-indigo-600">
          About
        </Link>
        <Link href="/projects" className="transition-colors hover:text-indigo-600">
          Projects
        </Link>
        <Link href="/services" className="transition-colors hover:text-indigo-600">
          Services
        </Link>
        <Link href="/contact" className="transition-colors hover:text-indigo-600">
          Contact
        </Link>
      </div>
    </nav>
  )
}
