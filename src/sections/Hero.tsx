import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Braces, Sparkles, Smartphone, Terminal, Wand2, Globe } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const floatingCards = [
  { icon: Braces, label: "Code", accent: "text-[#3B82F6]", ring: "border-[#3B82F6]/30" },
  { icon: Sparkles, label: "AI", accent: "text-[#22C55E]", ring: "border-[#22C55E]/30" },
  { icon: Smartphone, label: "Android", accent: "text-[#22C55E]", ring: "border-[#22C55E]/30" },
  { icon: Terminal, label: "Linux", accent: "text-[#FF3B30]", ring: "border-[#FF3B30]/30" },
  { icon: Wand2, label: "Automation", accent: "text-[#FF3B30]", ring: "border-[#FF3B30]/30" },
  { icon: Globe, label: "Web Dev", accent: "text-[#3B82F6]", ring: "border-[#3B82F6]/30" },
];

function DevCube({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(-18);
  const ry = useMotionValue(24);
  const srx = useSpring(rx, { stiffness: 60, damping: 14 });
  const sry = useSpring(ry, { stiffness: 60, damping: 14 });

  const rotateX = useTransform(srx, (v) => v);
  const rotateY = useTransform(sry, (v) => v);

  function handleMove(e: React.MouseEvent) {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(24 + px * 40);
    rx.set(-18 - py * 30);
  }

  function handleLeave() {
    rx.set(-18);
    ry.set(24);
  }

  const cube = "absolute inset-0 w-full h-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto aspect-square w-full max-w-[380px] sm:max-w-[460px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="preserve-3d relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className={cube + " preserve-3d rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"}>
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl p-5 font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF3B30]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
              </span>
              <span className="text-xs text-neutral-400">vikash.dev</span>
            </div>
            <div className="space-y-2 text-neutral-700 dark:text-neutral-200">
              <p>
                <span className="text-[#3B82F6]">const</span>{" "}
                <span className="text-neutral-900 dark:text-white">vikash</span> = {"{"}
              </p>
              <p className="pl-4">build: <span className="text-[#22C55E]">true</span>,</p>
              <p className="pl-4">learn: <span className="text-[#22C55E]">true</span>,</p>
              <p className="pl-4">experiment: <span className="text-[#22C55E]">true</span>,</p>
              <p>{"}"};</p>
            </div>
            <p className="text-xs text-neutral-400">
              <span className="text-[#FF3B30]">▮</span> always shipping…
            </p>
          </div>
        </div>
        <div className={cube + " rounded-2xl opacity-20"} style={{ transform: "translateZ(-32px)" }} />
      </motion.div>

      {floatingCards.map((c, i) => {
        // percentage positions kept within [-8%, 72%] so the cards never
        // spill outside the cube + section padding (prevents x-overflow)
        const angles = [
          { x: "-6%", y: "-10%" },
          { x: "72%", y: "-6%" },
          { x: "-8%", y: "58%" },
          { x: "66%", y: "64%" },
          { x: "6%", y: "20%" },
          { x: "42%", y: "86%" },
        ];
        const a = angles[i] ?? angles[0];
        return (
          <motion.div
            key={c.label}
            className={`absolute flex items-center gap-1.5 rounded-xl border bg-white dark:bg-neutral-900 px-3 py-2 text-xs font-semibold shadow-md ${c.ring} text-neutral-800 dark:text-neutral-100`}
            style={{ left: a.x, top: a.y }}
            animate={reduced ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <c.icon size={14} className={c.accent} />
            {c.label}
          </motion.div>
        );
      })}
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  // Shared entrance transition — smooth and professional
  const enter = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } as const,
  });

  return (
    <section id="home" ref={sectionRef} className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* background */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      {/* subtle floating gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -top-28 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#3B82F6]/10 blur-3xl"
        animate={reduced ? {} : { y: [0, -28, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-[#FF3B30]/8 blur-3xl"
        animate={reduced ? {} : { y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="order-2 lg:order-1">
          <motion.div
            {...enter(0.05)}
            style={reduced ? undefined : { x: mouse.x * -12, y: mouse.y * -8 }}
            className="will-change-transform"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>
              Open to Opportunities
            </span>

            {/* Name — subtle scale 0.96 → 1 */}
            <motion.h1
              className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white"
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm{" "}
              <span className="relative whitespace-nowrap">
                <span>Vikash.</span>
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#FF3B30]/80" />
              </span>
            </motion.h1>

            {/* Subtitle (headline) — 100ms after name */}
            <motion.p
              {...enter(0.25)}
              className="mt-5 text-2xl font-bold tracking-tight text-neutral-400 sm:text-3xl dark:text-neutral-500"
            >
              {profile.headline}
            </motion.p>

            <motion.div {...enter(0.35)} className="mt-3 inline-flex flex-wrap gap-1.5 text-sm font-semibold">
              {profile.roles.map((r) => (
                <span key={r} className="text-neutral-700 dark:text-neutral-300">
                  {r}
                  <span className="ml-1.5 text-neutral-300 dark:text-neutral-600">•</span>
                </span>
              ))}
            </motion.div>

            {/* Description — 100ms after subtitle */}
            <motion.p
              {...enter(0.45)}
              className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300"
            >
              {profile.intro}
            </motion.p>

            {/* CTA buttons — 100ms after description */}
            <motion.div {...enter(0.55)} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects" variant="primary">
                View My Work <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Let's Connect
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <DevCube reduced={reduced} />
        </motion.div>
      </div>
    </section>
  );
}
