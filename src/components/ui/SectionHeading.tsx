import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "red" | "green" | "blue";
  align?: "left" | "center";
};

const accentDot: Record<string, string> = {
  red: "bg-[#FF3B30]",
  green: "bg-[#22C55E]",
  blue: "bg-[#3B82F6]",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "blue",
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={`mb-12 ${isCenter ? "text-center" : "text-left"}`}>
      <div className={`flex items-center gap-2.5 ${isCenter ? "justify-center" : ""}`}>
        <span className={`inline-block h-2 w-2 rounded-full ${accentDot[accent]}`} />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-300 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
