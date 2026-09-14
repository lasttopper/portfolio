import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: number;
};

export function Logo({ className, showText = true, size = 28 }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="relative inline-flex items-center justify-center rounded-lg bg-neutral-900 font-mono font-bold text-white shadow-[0_3px_10px_-2px_rgba(0,0,0,0.5)]"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-hidden="true"
      >
        {"{"}
        <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full" style={{ background: "#22C55E" }} />
        <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full" style={{ background: "#3B82F6" }} />
      </span>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
          VIKASH
        </span>
      )}
    </span>
  );
}
