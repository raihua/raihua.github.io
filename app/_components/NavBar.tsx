import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

export default function NavBar() {
  return (
    <nav className="justify-items-center bg-blue-500 text-white">
      <ul className="flex flex-row">
        {navLinks.map((link) => (
          <li key={link.href} className="p-4 hover:bg-blue-700 hover:underline">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}