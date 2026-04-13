// SERVER COMPONENT
import { skills, skillCategories } from "@/data/profile";

export default function SkillsSection() {
  return (
    <section className="py-24 px-5 dark:bg-gray-900/30 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono text-accent tracking-widest mb-3">02 / SKILLS</p>
        <h2 className="text-4xl font-display font-bold dark:text-white text-gray-900 mb-12">
          Teknologi & Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat}>
              <h3 className="text-xs font-mono text-accent tracking-widest mb-5 uppercase">
                {cat}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
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
    </section>
  );
}
