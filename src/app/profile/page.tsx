"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useFavorites } from "@/context/FavoritesContext";

export const ProfilePage: React.FC = () => {
  const { favorites } = useFavorites();
  const [emailNotifications, setEmailNotifications] = useState(true);

  // Fictional user details
  const user = {
    name: "Alex Mercer",
    email: "alex.mercer@wanderlustlabs.io",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    role: "Explorer Elite",
    joinedDate: "June 2025",
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 flex-1 flex flex-col justify-start">
      {/* Header */}
      <div className="border-b border-zinc-100 pb-6 dark:border-zinc-800/80">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          My Profile
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Manage your account settings, statistics, and preferences.
        </p>
      </div>

      {/* Main Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column: User Card */}
        <div className="md:col-span-1">
          <div className="rounded-3xl border border-zinc-100 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            {/* Avatar */}
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-rose-500/10">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <h2 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">{user.name}</h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">{user.email}</p>

            <span className="mt-4 inline-flex items-center rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600 dark:bg-rose-950/20 dark:text-rose-400">
              {user.role}
            </span>

            <div className="mt-6 border-t border-zinc-100 pt-6 text-left dark:border-zinc-800/80">
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>Member since</span>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{user.joinedDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Settings */}
        <div className="md:col-span-2 space-y-6">
          {/* Highlighted Favorites Card */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            {/* Ambient background decoration */}
            <div className="absolute right-0 top-0 -z-10 h-32 w-32 bg-gradient-to-br from-rose-500/10 to-indigo-500/10 blur-2xl" />

            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider dark:text-zinc-500">Saved Lists</span>
                <h3 className="mt-2 text-2xl font-extrabold text-zinc-900 dark:text-white">
                  Favorite Experiences
                </h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  You have saved <span className="font-bold text-rose-500">{favorites.length}</span> unique experiences to your bucket list.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-950/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/favorites"
                className="inline-flex items-center gap-1 text-sm font-semibold text-rose-600 hover:text-rose-500 dark:text-rose-400"
              >
                Go to favorites list
                <span className="transition-transform duration-200 hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Travel Stats Card */}
          <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Traveler Stats</h3>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-850">
                <span className="text-2xl font-black text-zinc-900 dark:text-white">12</span>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Destinations</p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-850">
                <span className="text-2xl font-black text-zinc-900 dark:text-white">4</span>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Continents</p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-850">
                <span className="text-2xl font-black text-zinc-900 dark:text-white">28</span>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Tours Completed</p>
              </div>
            </div>
          </div>

          {/* Account Settings Simulation */}
          <div className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Account Settings</h3>
            <ul className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800/80">
              <li className="flex items-center justify-between py-3">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Notifications</span>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                    emailNotifications ? "bg-rose-500" : "bg-zinc-200 dark:bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
                      emailNotifications ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
