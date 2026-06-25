import React, { Suspense } from "react";
import ExperiencesList from "./ExperiencesList";

// Premium Skeleton Loader for experiences
const ExperiencesLoader = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Skeleton Header */}
      <div className="border-b border-zinc-100 pb-6 dark:border-zinc-800/80 animate-pulse">
        <div className="h-8 w-64 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-2 h-4 w-96 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Skeleton Filters */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 bg-white p-5 rounded-3xl border border-zinc-100 dark:bg-zinc-900/20 dark:border-zinc-800/80 animate-pulse">
        <div className="h-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Skeleton Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 animate-pulse"
          >
            <div className="aspect-3/2 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-4 h-6 w-3/4 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-4 w-1/2 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-6 flex justify-between items-center">
              <div className="h-8 w-20 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-8 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<ExperiencesLoader />}>
      <ExperiencesList />
    </Suspense>
  );
}
