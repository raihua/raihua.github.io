import type { Metadata } from "next";
import Navbar from "./_components/navbar";
import "./globals.css";
import Head from "next/head";


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
      <Head>
        <meta name="apple-mobile-web-app-title" content="PeterTrinh" key="apple-mobile-web-app-title" />
      </Head>
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
