import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Baner from "./components/Baner";
import Sidebar from "./components/Sidebar";
import MovieCard from "./components/MovieCard";
import SelectBaner from "./components/SelectBaner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickBet",
  description: "Welcome to QuickBet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <SelectBaner />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 min-h-screen overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
