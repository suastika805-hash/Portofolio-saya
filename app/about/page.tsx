// SERVER COMPONENT
import Link from "next/link";
import { profile, skills, skillCategories, stats } from "@/data/profile";

export const metadata = {
  title: "About — Swastika",
  description: "Tentang saya, latar belakang, dan skill.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white pt-24 pb-20 px-5">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono dark:text-gray-500 text-gray-500 dark:hover:text-white hover:text-gray-900 transition-colors mb-10">
          ← back
        </Link>

        <p className="text-xs font-mono text-accent tracking-widest mb-3">ABOUT</p>
        <h1 className="text-5xl font-display font-bold dark:text-white text-gray-900 mb-2">
          {profile.name}
        </h1>
        <p className="dark:text-gray-400 text-gray-600 mb-12 text-lg">
          {profile.jurusan} · {profile.universitas} · Angkatan {profile.angkatan}
        </p>

        {/* Bio */}
        <div className="dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200 rounded-2xl p-7 mb-10">
          <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed">{profile.bio}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-5 rounded-2xl dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200">
              <div className="text-3xl font-display font-bold text-accent mb-1">{s.value}</div>
              <div className="text-xs dark:text-gray-500 text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Info */}
        <h2 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-5">Info Detail</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
          {[
            { label: "NIM", value: profile.nim },
            { label: "Jurusan", value: profile.jurusan },
            { label: "Universitas", value: profile.universitas },
            { label: "Angkatan", value: profile.angkatan },
            { label: "Email", value: profile.email },
            { label: "Lokasi", value: profile.location },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 p-4 rounded-xl dark:bg-white/5 bg-gray-50 dark:border-white/5 border border-gray-200">
              <span className="text-xs font-mono dark:text-gray-500 text-gray-400 uppercase tracking-widest w-20 flex-shrink-0 mt-0.5">{item.label}</span>
              <span className="dark:text-gray-200 text-gray-800 text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h2 className="text-xl font-display font-bold dark:text-white text-gray-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat}>
              <h3 className="text-xs font-mono text-accent tracking-widest mb-5 uppercase">{cat}</h3>
              <div className="space-y-4">
                {skills.filter((s) => s.category === cat).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 text-sm">
                      <span className="font-medium dark:text-gray-300 text-gray-700">{skill.name}</span>
                      <span className="font-mono dark:text-gray-500 text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full dark:bg-white/10 bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
