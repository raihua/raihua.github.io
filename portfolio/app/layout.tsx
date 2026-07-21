import type { Metadata } from "next";
import Navbar from "./_components/navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Peter Trinh",
  description: "A portfolio website for Peter Trinh, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
