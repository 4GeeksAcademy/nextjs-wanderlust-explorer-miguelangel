import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Labs | Discover Unique Experiences",
  description: "Curated travel experiences for global seekers. Discover, save and book your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 font-sans antialiased text-zinc-900 dark:text-zinc-50">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-100 bg-white py-6 dark:border-zinc-900 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
              &copy; {new Date().getFullYear()} Wanderlust Labs. All rights reserved. Built for travelers.
            </div>
          </footer>
        </FavoritesProvider>
      </body>
    </html>
  );
}

