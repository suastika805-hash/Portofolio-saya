// SERVER COMPONENT — Dynamic Route /projects/[slug]
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Swastika`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white pt-24 pb-20 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-mono dark:text-gray-600 text-gray-400 mb-10">
          <Link href="/" className="dark:hover:text-white hover:text-gray-900 transition-colors">home</Link>
          <span>/</span>
          <Link href="/projects" className="dark:hover:text-white hover:text-gray-900 transition-colors">projects</Link>
          <span>/</span>
          <span className="dark:text-gray-300 text-gray-700">{project!.slug}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full dark:bg-accent/10 bg-accent/20 text-accent">
              {project!.category}
            </span>
            <span className="text-sm dark:text-gray-500 text-gray-400 font-mono">{project!.year}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold dark:text-white text-gray-900 mb-4">
            {project!.title}
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-600 leading-relaxed">
            {project!.description}
          </p>
        </div>

        {/* Emoji hero card */}
        <div className="aspect-video rounded-2xl dark:bg-white/5 bg-gray-100 dark:border-white/5 border border-gray-200 flex items-center justify-center mb-10 text-8xl">
          {project!.emoji}
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <h2 className="text-xs font-mono text-accent tracking-widest mb-4 uppercase">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project!.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 text-sm font-mono rounded-lg dark:bg-white/5 bg-gray-100 dark:border-white/10 border border-gray-200 dark:text-gray-300 text-gray-700">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-accent tracking-widest mb-4 uppercase">Deskripsi</h2>
          <div className="dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200 rounded-2xl p-7">
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-lg">
              {project!.longDescription}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project!.github && (
            <a
              href={project!.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent text-gray-950 font-bold hover:bg-accent-dim transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project!.demo && (
            <a
              href={project!.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl dark:border-white/10 border border-gray-300 dark:text-white text-gray-900 font-bold dark:hover:border-white/30 hover:border-gray-500 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>

        {/* Back */}
        <div className="mt-16 pt-8 border-t dark:border-white/5 border-gray-200">
          <Link href="/projects" className="text-sm font-mono text-accent hover:underline">
            ← Semua Proyek
          </Link>
        </div>
      </div>
    </main>
  );
}
