import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Circle, Layers, Lightbulb, Wrench, ListChecks } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import type { Project } from "@/data/projects";
import { projectGitHubUrl } from "@/data/projects";
import { accentStyles } from "@/data/theme";
import { MagneticButton } from "./ui/MagneticButton";

const statusColor: Record<string, string> = {
  Live: "#22C55E",
  "In Development": "#3B82F6",
  Experiment: "#FF3B30",
  "Learning Project": "#22C55E",
};

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = accentStyles[project.accent];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
        <motion.div
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 sm:rounded-3xl"
          initial={{ y: 60, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/90 px-6 py-4 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">{project.accentEmoji}</span>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{project.tagline}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          <div className="dot-grid-dark flex h-28 items-center justify-center bg-neutral-900 px-6">
            <span className="text-5xl" aria-hidden="true">{project.accentEmoji}</span>
          </div>

          <div className="space-y-8 px-6 py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold"
                style={{ color: statusColor[project.status], borderColor: statusColor[project.status] + "55", backgroundColor: statusColor[project.status] + "14" }}
              >
                <Circle size={10} fill="currentColor" /> {project.status}
              </span>
              <span className="flex gap-2">
                <a
                  href={projectGitHubUrl(project.githubUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  <GithubIcon size={14} /> {project.githubUrl ? "GitHub" : "GitHub Profile"}
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </span>
            </div>

            <Block icon={Layers} title="Overview" accent={accent.text}>{project.overview}</Block>
            <Block icon={Lightbulb} title="Problem" accent={accent.text}>{project.problem}</Block>
            <Block icon={Wrench} title="Solution" accent={accent.text}>{project.solution}</Block>

            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                <ListChecks size={15} className={accent.text} aria-hidden="true" /> Features
              </h4>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.solid}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className={`rounded-md px-2.5 py-1 text-xs font-medium ${accent.bgSoft} ${accent.text}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.screenshots.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {project.screenshots.map((s, i) => (
                  <img key={i} src={s} alt={`${project.name} screenshot ${i + 1}`} className="rounded-xl border border-neutral-200 dark:border-neutral-700" loading="lazy" />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-400 dark:border-neutral-600">
                Screenshots coming soon — this project is still in progress.
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-end gap-3 border-t border-neutral-100 px-6 py-5 dark:border-neutral-800">
            <MagneticButton href={projectGitHubUrl(project.githubUrl)} variant="secondary" target="_blank">
              <GithubIcon size={16} /> {project.githubUrl ? "GitHub" : "GitHub Profile"}
            </MagneticButton>
            {project.liveUrl && (
              <MagneticButton href={project.liveUrl} variant="primary" target="_blank">
                <ExternalLink size={16} /> Live Demo
              </MagneticButton>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Block({ icon: Icon, title, accent, children }: { icon: typeof Layers; title: string; accent: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
        <Icon size={15} className={accent} aria-hidden="true" /> {title}
      </h4>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{children}</p>
    </div>
  );
}
