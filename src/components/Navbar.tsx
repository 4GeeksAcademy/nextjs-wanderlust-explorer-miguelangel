"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  const navItems = [
    { name: "Explore", href: "/experiences" },
    { name: "Favorites", href: "/favorites", badge: favorites.length },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
          <svg
            className="h-7 w-7 sm:h-8 sm:w-8 text-rose-500 transition-transform duration-300 group-hover:rotate-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Wanderlust<span className="text-rose-500">Labs</span>
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-0.5 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-rose-600 bg-rose-50/50 dark:text-rose-400 dark:bg-rose-950/30"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-900/50"
                }`}
              >
                <span className="flex items-center gap-1">
                  {item.name}
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
