import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/profile";
import { cn } from "@/utils/cn";

const accents = [
  "text-[#FF3B30] dark:text-[#FF6B61]",
  "text-[#3B82F6] dark:text-[#60a5fa]",
  "text-[#22C55E] dark:text-[#4ade80]",
  "text-[#FF3B30] dark:text-[#FF6B61]",
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06} className="h-full">
              <div className="surface flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center transition-transform duration-200 hover:-translate-y-1">
                <span className={cn("font-display text-3xl font-bold sm:text-4xl", accents[i % accents.length])}>{s.value}</span>
                <span className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
