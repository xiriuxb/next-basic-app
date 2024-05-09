import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponent from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greg's Portfolio of Small Bets",
  description: "Tech Courses and Books",
  keywords:
    "passive income, small bets, tech courses, tech books, tech tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarComponent />
        {children}
      </body>
    </html>
  );
}
