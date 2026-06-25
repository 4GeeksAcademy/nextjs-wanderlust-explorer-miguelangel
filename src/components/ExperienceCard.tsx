"use client";

import React from "react";
import Link from "next/link";
import { Experience } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(experience.id);

  // Map category to aesthetic colors
  const categoryColors: Record<Experience["category"], string> = {
    Adventure: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-100 dark:border-blue-900/50",
    Culture: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border-purple-100 dark:border-purple-900/50",
    Food: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-100 dark:border-amber-900/50",
    Wellness: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/50",
    Nature: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50",
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40">
      {/* Image container */}
      <div className="relative aspect-3/2 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(experience.id);
          }}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95 dark:bg-zinc-950/80"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className={`h-5 w-5 transition-colors duration-200 ${
              isFav ? "fill-rose-500 text-rose-500 animate-pulse" : "text-zinc-600 dark:text-zinc-400 hover:text-rose-500"
            }`}
            fill={isFav ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Card Info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          {/* Category */}
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[experience.category]}`}>
            {experience.category}
          </span>
          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              {experience.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/experiences/${experience.id}`} className="mt-3 block group-hover:text-rose-500">
          <h3 className="text-base font-bold text-zinc-900 line-clamp-1 dark:text-zinc-50 transition-colors duration-200">
            {experience.title}
          </h3>
        </Link>

        {/* Destination / Location */}
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {experience.destination}
        </p>

        {/* Footer price */}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
          <div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase font-semibold tracking-wider">Price</span>
            <p className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50">
              ${experience.price} <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">/ person</span>
            </p>
          </div>
          <Link
            href={`/experiences/${experience.id}`}
            className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
