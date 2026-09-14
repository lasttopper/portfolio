import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/journey";
import { accentStyles } from "@/data/theme";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Service } from "@/data/journey";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduced = useReducedMotion();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(3, !reduced);
  const accent = accentStyles[service.accent];

  return (
    <Reveal delay={(index % 3) * 0.09} y={25} className="h-full">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="surface group relative flex h-full flex-col rounded-2xl p-7 transition-shadow duration-300 hover:shadow-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${accent.solid}`} />
        <div
          className={`icon-motion mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border ${accent.border} ${accent.bgSoft} text-3xl`}
          style={{ transform: "translateZ(30px)" }}
          aria-hidden="true"
        >
          {service.emoji}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.tech.map((t) => (
            <span key={t} className={`rounded-md px-2 py-1 text-[11px] font-medium ${accent.bgSoft} ${accent.text}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function WhatIDo() {
  return (
    <section id="experience" className="relative bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Identity"
          title="What I Do"
          description="The areas where I love to tinker, build and grow — each a different side of the same curiosity."
          accent="blue"
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
