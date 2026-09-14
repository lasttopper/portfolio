import { Reveal } from "@/components/ui/Reveal";
import { currentlyExploring } from "@/data/journey";

export function CurrentlyExploring() {
  return (
    <section className="relative border-y border-neutral-200 bg-neutral-900 py-20 dark:border-neutral-800 sm:py-28">
      <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Live</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Currently Exploring
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              A living snapshot of what I'm learning <em>right now</em> — the rabbit holes I'm most excited about.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {currentlyExploring.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04} y={14}>
              <div className="surface-dark group flex items-center gap-2.5 rounded-xl px-4 py-3 transition-transform duration-200 hover:-translate-y-1">
                <span className="text-lg transition-transform duration-200 group-hover:scale-110" aria-hidden="true">{item.emoji}</span>
                <span className="text-sm font-medium text-neutral-200">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
