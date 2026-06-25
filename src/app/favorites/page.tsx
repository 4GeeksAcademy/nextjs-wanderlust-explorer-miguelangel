"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCES } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import ExperienceCard from "@/components/ExperienceCard";

export const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  // Filter experiences using saved IDs in the context
  const favoritedExperiences = EXPERIENCES.filter((exp) => favorites.includes(exp.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-1 flex flex-col">
      {/* Header */}
      <div className="border-b border-zinc-100 pb-6 dark:border-zinc-800/80">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          My Favorites
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Your saved travel itineraries and dream activities.
        </p>
      </div>

      {/* Grid or Empty State */}
      <div className="mt-10 flex-1 flex flex-col justify-start">
        {favoritedExperiences.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoritedExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        ) : (
          /* Elegant Empty State */
          <div className="my-auto flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 py-20 text-center dark:border-zinc-800/80">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-500 dark:bg-rose-950/20">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-bold text-zinc-900 dark:text-zinc-100">No saved favorites yet</h3>
            <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
              As you browse Wanderlust Labs, tap the heart icon on any experience to save it here for later.
            </p>
            <div className="mt-8">
              <Link
                href="/experiences"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                Explore Experiences
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default FavoritesPage;
