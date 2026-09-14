/**
 * ACCENT COLOR SYSTEM
 * ────────────────
 * 🔴 Red   — personal identity, important actions
 * 🟢 Green — live, active, available, completed
 * 🔵 Blue  — technology, projects, learning, information
 *
 * Each accent ships light + dark variants so colored text/badges
 * stay readable on both themes.
 */

export type Accent = "red" | "green" | "blue" | "neutral";

export const accentStyles: Record<
  Accent,
  {
    text: string;
    bgSoft: string;
    border: string;
    solid: string;
    ring: string;
    dot: string;
    glow: string;
    chip: string;
  }
> = {
  red: {
    text: "text-[#FF3B30] dark:text-[#FF6B61]",
    bgSoft: "bg-[#FF3B30]/10 dark:bg-[#FF3B30]/20",
    border: "border-[#FF3B30]",
    solid: "bg-[#FF3B30]",
    ring: "ring-[#FF3B30]",
    dot: "bg-[#FF3B30]",
    glow: "shadow-[0_8px_30px_-10px_rgba(255,59,48,0.5)]",
    chip: "bg-[#FF3B30] text-white",
  },
  green: {
    text: "text-[#16a34a] dark:text-[#4ade80]",
    bgSoft: "bg-[#22C55E]/10 dark:bg-[#22C55E]/20",
    border: "border-[#22C55E]",
    solid: "bg-[#22C55E]",
    ring: "ring-[#22C55E]",
    dot: "bg-[#22C55E]",
    glow: "shadow-[0_8px_30px_-10px_rgba(34,197,94,0.5)]",
    chip: "bg-[#22C55E] text-white",
  },
  blue: {
    text: "text-[#2563eb] dark:text-[#60a5fa]",
    bgSoft: "bg-[#3B82F6]/10 dark:bg-[#3B82F6]/20",
    border: "border-[#3B82F6]",
    solid: "bg-[#3B82F6]",
    ring: "ring-[#3B82F6]",
    dot: "bg-[#3B82F6]",
    glow: "shadow-[0_8px_30px_-10px_rgba(59,130,246,0.5)]",
    chip: "bg-[#3B82F6] text-white",
  },
  neutral: {
    text: "text-neutral-600 dark:text-neutral-300",
    bgSoft: "bg-neutral-100 dark:bg-neutral-800",
    border: "border-neutral-300 dark:border-neutral-600",
    solid: "bg-neutral-800 dark:bg-neutral-700",
    ring: "ring-neutral-400 dark:ring-neutral-500",
    dot: "bg-neutral-400 dark:bg-neutral-500",
    glow: "",
    chip: "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200",
  },
};
