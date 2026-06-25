"use client";

import React, { use } from "react";
import Link from "next/link";
import { EXPERIENCES } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ExperienceDetailPage: React.FC<PageProps> = ({ params }) => {
  const { id } = use(params);
  const { toggleFavorite, isFavorite } = useFavorites();

  const experience = EXPERIENCES.find((exp) => exp.id === id);
  const isFav = isFavorite(id);

  // Clean error state if experience is not found
  if (!experience) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/20">
          <svg
            className="mx-auto h-12 w-12 text-rose-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">Experience Not Found</h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            We couldn't find the travel experience you were looking for. It may have been removed or the link might be incorrect.
          </p>
          <div className="mt-8">
            <Link
              href="/experiences"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Back to Explorer
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryColors: Record<typeof experience.category, string> = {
    Adventure: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-100 dark:border-blue-900/50",
    Culture: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border-purple-100 dark:border-purple-900/50",
    Food: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-100 dark:border-amber-900/50",
    Wellness: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/50",
    Nature: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50",
  };

  const handleBooking = () => {
    alert(`Success! You have requested booking for: "${experience.title}"`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link
        href="/experiences"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Explorer
      </Link>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left/Main Column: Image & Details */}
        <div className="lg:col-span-2">
          {/* Large Image Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-100 shadow-sm dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 aspect-16/10 md:aspect-21/9">
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="h-full w-full object-cover"
            />
            {/* Quick stats on image */}
            <span className={`absolute left-6 bottom-6 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-md bg-white/90 border-white/20 dark:bg-zinc-950/80 ${categoryColors[experience.category]}`}>
              {experience.category}
            </span>
          </div>

          {/* Details header */}
          <div className="mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  {experience.title}
                </h1>
                <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {experience.destination}
                </p>
              </div>

              {/* Rating badge */}
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-100 rounded-2xl px-3 py-1.5 self-start dark:bg-amber-950/30 dark:border-amber-900/50">
                <svg className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-extrabold text-amber-800 dark:text-amber-400">
                  {experience.rating.toFixed(1)}
                </span>
                <span className="text-xs text-amber-600/80 dark:text-amber-500/80 font-medium">(120 reviews)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800/80">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">About this experience</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400 font-normal">
              {experience.description}
            </p>
          </div>

          {/* Highlights / Included */}
          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800/80">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What's included</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Professional local guide</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">All necessary entry fees & equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Bottled mineral water</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">High-resolution photo collection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <div className="lg:pl-4">
          <div className="sticky top-24 rounded-3xl border border-zinc-100 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900/40">
            {/* Price section */}
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Price</span>
              <div className="text-right">
                <p className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  ${experience.price}
                </p>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">per person (VAT included)</span>
              </div>
            </div>

            {/* Simulated Booking Form */}
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date</label>
                <input
                  type="date"
                  defaultValue="2026-07-15"
                  className="mt-1 w-full bg-transparent text-sm font-semibold outline-none dark:text-zinc-50"
                />
              </div>
              <div className="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800">
                <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Guests</label>
                <select className="mt-1 w-full bg-transparent text-sm font-semibold outline-none dark:text-zinc-50 dark:bg-zinc-900">
                  <option value="1">1 traveler</option>
                  <option value="2">2 travelers</option>
                  <option value="3">3 travelers</option>
                  <option value="4">4+ travelers</option>
                </select>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 space-y-3">
              <button
                onClick={handleBooking}
                className="w-full rounded-2xl bg-rose-600 py-4 text-center text-sm font-bold text-white shadow-lg shadow-rose-500/10 transition-all hover:bg-rose-500 active:scale-98"
              >
                Reserve Now
              </button>

              <button
                onClick={() => toggleFavorite(experience.id)}
                className={`w-full flex items-center justify-center gap-2 rounded-2xl border py-3.5 text-center text-sm font-semibold transition-all active:scale-98 ${
                  isFav
                    ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/50 dark:text-rose-400"
                    : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:bg-transparent dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                }`}
              >
                <svg
                  className={`h-5 w-5 ${isFav ? "fill-rose-500 text-rose-500" : ""}`}
                  fill={isFav ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {isFav ? "Saved in Favorites" : "Save to Favorites"}
              </button>
            </div>

            {/* Note */}
            <p className="mt-4 text-center text-xs text-zinc-400 dark:text-zinc-500">
              Free cancellation up to 24 hours before the activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceDetailPage;
