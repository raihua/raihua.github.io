import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Peter Trinh",
  description: "Peter Trinh's portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="p-0 m-0">
        {children}
      </body>
    </html>
  );
}
