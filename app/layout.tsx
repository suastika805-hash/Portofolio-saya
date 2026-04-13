import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "Swastika — Portofolio",
  description: "Portofolio I Komang Swastika Adnyana — Mahasiswa Informatika & Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-gray-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
