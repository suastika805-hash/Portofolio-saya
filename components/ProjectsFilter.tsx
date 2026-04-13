"use client";
// CLIENT COMPONENT — menggunakan useState untuk filter kategori

import { useState } from "react";
import Link from "next/link";
import { Project, projectCategories } from "@/data/projects";

export default function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-200 ${
              active === cat
                ? "bg-accent text-gray-950"
                : "dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-600 dark:hover:bg-white/10 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative p-6 rounded-2xl dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200 dark:hover:border-accent/40 hover:border-accent/60 transition-all duration-300 overflow-hidden"
          >
            {/* Emoji watermark */}
            <div className="absolute top-0 right-0 text-7xl opacity-10 group-hover:opacity-20 transition-opacity select-none pointer-events-none leading-none p-4">
              {project.emoji}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full dark:bg-accent/10 bg-accent/20 text-accent">
                  {project.category}
                </span>
                <span className="text-xs dark:text-gray-600 text-gray-400 font-mono">{project.year}</span>
              </div>

              <h2 className="text-lg font-display font-bold dark:text-white text-gray-900 mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded dark:bg-white/5 bg-gray-200 dark:text-gray-500 text-gray-500">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded dark:bg-white/5 bg-gray-200 dark:text-gray-600 text-gray-400">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center dark:text-gray-600 text-gray-400 font-mono text-sm">
          Tidak ada proyek di kategori ini.
        </div>
      )}
    </div>
  );
}
