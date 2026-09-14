import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hobbies } from "@/data/hobbies";
import { accentStyles } from "@/data/theme";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTilt } from "@/hooks/useTilt";

function HobbyCard({ hobby, index }: { hobby: (typeof hobbies)[number]; index: number }) {
  const reduced = useReducedMotion();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(3, !reduced);
  const accent = accentStyles[hobby.accent];

  return (
    <Reveal delay={(index % 4) * 0.06} y={25} className="h-full">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="surface group relative flex h-full flex-col items-center rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className="icon-motion mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-3xl dark:border-neutral-700 dark:bg-neutral-800"
          aria-hidden="true"
        >
          {hobby.emoji}
        </span>
        <h3 className="text-base font-bold text-neutral-900 dark:text-white">{hobby.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{hobby.description}</p>
        <span className={`mt-4 h-1 w-8 rounded-full ${accent.solid} opacity-40 transition-all duration-300 group-hover:w-12 group-hover:opacity-100`} aria-hidden="true" />
      </div>
    </Reveal>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="relative bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond Code"
          title="What else makes me tick"
          description="The stuff I geek out on when I'm not shipping projects — the things that keep the ideas flowing."
          accent="green"
          align="center"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {hobbies.map((h, i) => (
            <HobbyCard key={h.id} hobby={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
