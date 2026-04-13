// SERVER COMPONENT
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata = {
  title: "Projects — Swastika",
  description: "Daftar proyek yang telah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white pt-24 pb-20 px-5">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono dark:text-gray-500 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors mb-10">
          ← back
        </Link>

        <p className="text-xs font-mono text-accent tracking-widest mb-3">PROJECTS</p>
        <h1 className="text-5xl font-display font-bold dark:text-white text-gray-900 mb-3">
          Semua Proyek
        </h1>
        <p className="dark:text-gray-400 text-gray-600 text-lg mb-12">
          Proyek yang telah saya kerjakan — dari tugas kuliah hingga proyek mandiri.
        </p>

        {/* Client component untuk filter interaktif */}
        <ProjectsFilter projects={projects} />
      </div>
    </main>
  );
}
