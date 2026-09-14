import { useRef } from "react";
import type { ReactNode } from "react";
import type { MouseEvent } from "react";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "accent-red";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  target?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
  ariaLabel,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-[transform,box-shadow,background-color] duration-200 will-change-transform select-none";

  const styles: Record<string, string> = {
    primary:
      "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-neutral-900 dark:border-white border-b-[3px] hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.5)] active:shadow-none active:translate-y-[2px] hover:-translate-y-0.5",
    "accent-red":
      "bg-[#FF3B30] text-white border border-[#FF3B30] border-b-[3px] hover:brightness-95 shadow-[0_6px_20px_-8px_rgba(255,59,48,0.7)] active:shadow-none active:translate-y-[2px] hover:-translate-y-0.5",
    secondary:
      "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 border-b-[3px] hover:border-neutral-400 hover:-translate-y-0.5 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.15)] active:shadow-none active:translate-y-[2px]",
    ghost:
      "bg-transparent text-neutral-800 dark:text-neutral-100 border border-transparent hover:border-neutral-300 dark:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800",
  };

  const classes = cn(base, styles[variant], className);

  const content = <span>{children}</span>;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={classes}
        aria-label={ariaLabel}
        style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease" }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease" }}
    >
      {content}
    </button>
  );
}
