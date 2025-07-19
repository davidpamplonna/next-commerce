import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import clsx from "clsx";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export const metadata: Metadata = {
  title: "Next E-Commerce 13",
  description: "Next E-Commerce utilizando a versão 13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx (inter.className, 'bg-slate-700')}
      >
        <Navbar />
        <main className="h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
