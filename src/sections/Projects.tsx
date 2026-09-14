import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, projectGitHubUrl, type Project } from "@/data/projects";
import { accentStyles } from "@/data/theme";
import { ExternalLink, ArrowUpRight, Circle } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const statusColor: Record<string, string> = {
  Live: "#22C55E",
  "In Development": "#3B82F6",
  Experiment: "#FF3B30",
  "Learning Project": "#22C55E",
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const reduced = useReducedMotion();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(3, !reduced);
  const accent = accentStyles[project.accent];

  return (
    <Reveal y={35} delay={0.1} className="h-full">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="dot-grid-dark relative flex h-44 items-center justify-center overflow-hidden bg-neutral-900">
          <span className="text-6xl transition-transform duration-500 ease-out group-hover:scale-110" aria-hidden="true">
            {project.accentEmoji}
          </span>
          <span
            className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm"
            style={{ color: statusColor[project.status], borderColor: statusColor[project.status] + "55", backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <Circle size={8} fill="currentColor" /> {project.status}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.name}</h3>
          <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">{project.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${accent.bgSoft} ${accent.text}`}>
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-neutral-100 pt-4 dark:border-neutral-800">
            <button
              onClick={onOpen}
              className="btn-interact inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Details <ArrowUpRight size={14} />
            </button>
            <a
              href={projectGitHubUrl(project.githubUrl)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.githubUrl ? `${project.name} on GitHub` : "View my GitHub profile"}
              title={project.githubUrl ? "Open repository" : "No dedicated repo — open my GitHub profile"}
              className="btn-interact inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
            >
              <GithubIcon size={15} />
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="btn-interact inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
              >
                <ExternalLink size={15} />
              </a>
            ) : (
              <span className="ml-auto text-[11px] font-medium text-neutral-400" title="Demo coming soon">Demo soon</span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built & tinkered with"
          description="A mix of live projects, experiments and learning builds. Labels keep it honest — not everything here is a finished product."
          accent="blue"
        />

        <Reveal className="mb-8">
          <p className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <GithubIcon size={14} className="text-neutral-400" />
            Projects link to their GitHub repos — ones without a dedicated repo point to my full GitHub profile instead.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
