import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { AspectRatio } from "@/components/ui/aspect-ratio"


const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

export default function Home() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink href={link.href}>
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <main>
        <section id="about">
          <AspectRatio
            ratio={1 / 1}
            className="w-full max-w-[12rem] rounded-lg bg-muted"
          >
            <Image
              src="/Me.jpeg"
              alt="Photo of Peter Trinh"
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
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
