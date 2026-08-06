import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Peter Trinh",
  description: "Peter Trinh's portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", roboto.variable)}>
      <body className="p-0 m-0">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
