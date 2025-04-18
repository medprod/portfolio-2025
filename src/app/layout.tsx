import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medha Prodduturi - Portfolio",
  description: "A sleek and minimalistic portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#FFF9E6] text-gray-800 antialiased cursor-default`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
