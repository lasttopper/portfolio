import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillLevels } from "@/data/skills";
import { accentStyles, type Accent } from "@/data/theme";
import type { SkillLevel } from "@/data/skills";

const levelMeta: Record<SkillLevel, { dot: string; text: string }> = {
  beginner: { dot: "bg-neutral-400", text: "text-neutral-500 dark:text-neutral-400" },
  learning: { dot: "bg-[#3B82F6]", text: "text-[#2563eb] dark:text-[#60a5fa]" },
  comfortable: { dot: "bg-[#22C55E]", text: "text-[#16a34a] dark:text-[#4ade80]" },
  advanced: { dot: "bg-[#FF3B30]", text: "text-[#FF3B30] dark:text-[#FF6B61]" },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="An honest snapshot of my current toolset — no fake percentages, just where I'm at on the journey."
          accent="green"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, idx) => {
            const accent = accentStyles[cat.accent as Accent];
            return (
              <Reveal key={cat.id} delay={(idx % 3) * 0.08} y={25} className="h-full">
                <div className="surface group hover-lift flex h-full flex-col rounded-2xl p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`icon-motion h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{cat.title}</h3>
                  </div>
                  <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">{cat.description}</p>
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {cat.items.map((item) => {
                      const lm = levelMeta[item.level];
                      return (
                        <li
                          key={item.name}
                          className="flex items-center justify-between gap-3 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3.5 py-2.5 transition-colors hover:border-neutral-200 hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/60 dark:hover:bg-neutral-800"
                        >
                          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{item.name}</span>
                          <span className="inline-flex shrink-0 items-center gap-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full ${lm.dot}`} />
                            <span className={`text-xs font-medium ${lm.text}`}>{skillLevels[item.level].label}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-4 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">Legend:</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neutral-400" /> Beginner</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#3B82F6]" /> Learning</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#22C55E]" /> Comfortable</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#FF3B30]" /> Advanced</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
