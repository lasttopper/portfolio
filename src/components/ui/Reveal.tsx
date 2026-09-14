import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  /** "up" | "down" | "left" | "right" — shorthand directional reveal */
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  once?: boolean;
};

const directionOffset: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: -35, y: 0 },
  right: { x: 35, y: 0 },
};

/**
 * Scroll-reveal wrapper. Directional or custom offsets.
 * Triggers once when ~80px of the section enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y,
  x,
  direction,
  className,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();
  const offset = direction ? directionOffset[direction] : { x: x ?? 0, y: y ?? 24 };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
