import Image from "next/image";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

export default function Home() {
  return (
    <div>
      <main>
        <section id="about">
          <Image
            src="/Me.jpeg"
            alt="Photo of Peter Trinh"
            fill
            className="rounded-lg object-cover"
          />
          <h1>About Me</h1>
          <h2>Hi, I'm Peter Trinh!</h2>
          <p>I am a software engineer with experience in designing and implementing software solutions for business problems.</p>
        </section>

        <section id="experience">


        </section>

        <section id="projects">
        </section>

        <section id="contact">
        </section>
      </main>
    </div>
  );
}
