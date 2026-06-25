import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 py-12 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.rose.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.900),theme(colors.zinc.950))] opacity-40" />

      {/* Main Hero Container */}
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600 ring-1 ring-inset ring-rose-600/10 dark:bg-rose-950/20 dark:text-rose-400 dark:ring-rose-500/20">
          Introducing Wanderlust Labs MVP
        </span>
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
          Find experiences that <br />
          <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            stay with you forever.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Discover handpicked local activities, breathtaking tours, and unique retreats
          designed for travelers seeking authentic moments. Inspired by the best in travel-tech.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            id="cta-explore"
            href="/experiences"
            className="rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 hover:shadow-rose-500/10"
          >
            Start Exploring
          </Link>
          <Link
            href="/favorites"
            className="group text-sm font-semibold leading-6 text-zinc-900 dark:text-white flex items-center gap-1"
          >
            View Favorites{" "}
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>

      {/* Features preview section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Curated Adventures</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              From ice climbing on glaciers to private culinary secrets in Rome. High-quality experiences certified by Wanderlust Labs.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Advanced Search Filters</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Find exactly what you want. Filter by destination, pricing, category and tags instantly through a clean interface.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md sm:col-span-2 lg:col-span-1 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Save Favorites</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Never lose track of your dream itineraries. Click the heart to store experiences and view them anytime, even offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
