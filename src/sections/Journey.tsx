import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";
import { accentStyles } from "@/data/theme";
import { Check, Activity } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Journey() {
  const reduced = useReducedMotion();

  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="My Journey"
          description="The path so far — no inflated dates, just the milestones that shaped the way I build and learn."
          accent="red"
          align="center"
        />

        <div className="relative">
          {/* timeline line — grows vertically when in view */}
          <motion.div
            className="absolute left-[18px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-700 sm:left-1/2"
            initial={reduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {journey.map((m, i) => {
              const accent = accentStyles[m.accent];
              const isLeft = i % 2 === 0;
              const isCurrent = m.status === "current";
              return (
                <li key={m.id} className="relative">
                  <Reveal delay={0.05 * i} y={20}>
                    <div className={`flex items-start gap-5 ${isLeft ? "sm:flex-row-reverse" : ""} sm:items-center`}>
                      <motion.span
                        initial={reduced ? false : { scale: 0.7 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute left-[18px] top-1 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white ${isCurrent ? accent.border : "border-neutral-200 dark:border-neutral-700"} sm:left-1/2 dark:bg-neutral-900`}
                      >
                        {isCurrent ? (
                          <span className="relative flex h-2.5 w-2.5">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${accent.dot} opacity-75`} />
                            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${accent.dot}`} />
                          </span>
                        ) : (
                          <Check size={14} className={accent.text} />
                        )}
                      </motion.span>
                      <div className={`ml-14 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}`}>
                        <div className={`surface hover-lift rounded-2xl p-5 ${isCurrent ? "border-neutral-300 dark:border-neutral-600" : ""}`}>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-base font-bold text-neutral-900 dark:text-white">{m.title}</h3>
                            <span className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] font-medium ${accent.bgSoft} ${accent.text}`}>
                              {m.date}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{m.description}</p>
                          {isCurrent && (
                            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#16a34a] dark:text-[#4ade80]">
                              <Activity size={13} /> In progress
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
