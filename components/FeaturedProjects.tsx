// SERVER COMPONENT
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 px-5 dark:bg-gray-950 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono text-accent tracking-widest mb-3">03 / PROJECTS</p>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-display font-bold dark:text-white text-gray-900">
            Proyek Unggulan
          </h2>
          <Link
            href="/projects"
            className="text-sm font-mono text-accent hover:underline hidden sm:block"
          >
            Semua proyek →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative p-6 rounded-2xl dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200 dark:hover:border-accent/40 hover:border-accent/60 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-8xl opacity-10 group-hover:opacity-20 transition-opacity select-none pointer-events-none leading-none p-3">
                {project.emoji}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full dark:bg-accent/10 bg-accent/20 text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs dark:text-gray-600 text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-lg font-display font-bold dark:text-white text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded dark:bg-white/5 bg-gray-200 dark:text-gray-400 text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link href="/projects" className="text-sm font-mono text-accent hover:underline">
            Semua proyek →
          </Link>
        </div>
      </div>
    </section>
  );
}
