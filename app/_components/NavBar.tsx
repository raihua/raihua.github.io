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
    <nav className="border justify-items-center">
      <ul className="flex flex-row">
        {navLinks.map((link) => (
          <li key={link.href} className="m-2 p-2 border">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}