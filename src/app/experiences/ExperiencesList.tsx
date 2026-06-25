"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { EXPERIENCES, Experience } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export const ExperiencesList: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Get current query params for filtering
  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedDestination = searchParams.get("destination") || "";

  // Local states for inputs
  const [searchVal, setSearchVal] = useState(searchQuery);
  const [categoryVal, setCategoryVal] = useState(selectedCategory);
  const [destinationVal, setDestinationVal] = useState(selectedDestination);

  // Sync state with URL search params when they change (e.g. initial load, back/forward button, reset)
  useEffect(() => {
    setSearchVal(searchParams.get("search") || "");
    setCategoryVal(searchParams.get("category") || "");
    setDestinationVal(searchParams.get("destination") || "");
  }, [searchParams]);

  // Get unique categories and destinations for the filter dropdowns
  const categories: Experience["category"][] = ["Adventure", "Culture", "Food", "Wellness", "Nature"];
  const destinations = Array.from(new Set(EXPERIENCES.map((e) => e.destination))).sort();

  // Filter experiences based on params
  const filteredExperiences = EXPERIENCES.filter((exp) => {
    let matchesSearch = true;
    if (searchQuery) {
      try {
        matchesSearch = new RegExp(searchQuery, "i").test(exp.title);
      } catch (err) {
        matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
    }
    const matchesCategory = !selectedCategory || exp.category === selectedCategory;
    const matchesDestination = !selectedDestination || exp.destination === selectedDestination;

    return matchesSearch && matchesCategory && matchesDestination;
  });

  // Debounce search query update to URL
  useEffect(() => {
    const currentSearchQuery = searchParams.get("search") || "";
    if (searchVal === currentSearchQuery) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchVal) {
        params.set("search", searchVal);
      } else {
        params.delete("search");
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchVal, pathname, router, searchParams]);

  // Handle immediate dropdown updates
  const handleSelectChange = (key: string, value: string) => {
    if (key === "category") setCategoryVal(value);
    if (key === "destination") setDestinationVal(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  const handleReset = () => {
    setSearchVal("");
    setCategoryVal("");
    setDestinationVal("");
    startTransition(() => {
      router.replace(pathname);
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header and Results count */}
      <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between border-b border-zinc-100 pb-6 dark:border-zinc-800/80">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Explore Experiences
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Discover and book unique activities guided by local experts.
          </p>
        </div>
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Showing {filteredExperiences.length} of {EXPERIENCES.length} results
        </span>
      </div>

      {/* Filter Section */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 items-end bg-white p-5 rounded-3xl border border-zinc-100 dark:bg-zinc-900/20 dark:border-zinc-800/80 shadow-sm">
        {/* Search Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="search-input" className="text-xs font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Search
          </label>
          <div className="relative">
            <input
              id="search-input"
              type="text"
              placeholder="e.g. Pasta, Skydive..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-zinc-400 focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-rose-500"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category-select" className="text-xs font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Category
          </label>
          <select
            id="category-select"
            value={categoryVal}
            onChange={(e) => handleSelectChange("category", e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white p-3 text-sm outline-none transition-all focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-rose-500"
          >
            <option value="" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Dropdown */}
        <div className="flex flex-col gap-2">
          <label htmlFor="destination-select" className="text-xs font-bold text-zinc-500 uppercase tracking-wider dark:text-zinc-400">
            Destination
          </label>
          <select
            id="destination-select"
            value={destinationVal}
            onChange={(e) => handleSelectChange("destination", e.target.value)}
            className="w-full rounded-2xl border border-zinc-200 bg-white p-3 text-sm outline-none transition-all focus:border-rose-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-rose-500"
          >
            <option value="" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">All Destinations</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        {(searchQuery || selectedCategory || selectedDestination) && (
          <button
            onClick={handleReset}
            disabled={isPending}
            className="w-full rounded-2xl border border-zinc-200 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 active:scale-95 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Grid of Results */}
      <div className={`mt-10 transition-opacity duration-300 ${isPending ? "opacity-60" : "opacity-100"}`}>
        {filteredExperiences.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 py-20 text-center dark:border-zinc-800/80">
            <svg className="mx-auto h-12 w-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">No experiences found</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Try adjusting your search query or filters to find what you are looking for.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ExperiencesList;
