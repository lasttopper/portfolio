import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { useGitHubRepos, type GitHubRepo } from "@/hooks/useGitHubRepos";
import { githubUsername } from "@/data/profile";
import { Star, GitFork, ExternalLink, FolderGit2, Loader2, AlertTriangle } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const langColor: Record<string, string> = {
  TypeScript: "#3B82F6",
  JavaScript: "#22C55E",
  HTML: "#FF3B30",
  CSS: "#3B82F6",
  Python: "#22C55E",
};

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const reduced = useReducedMotion();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>(5, !reduced);
  const color = langColor[repo.language ?? ""] ?? "#6b7280";

  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <a
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="surface group relative flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mb-4 flex items-start justify-between">
          <span className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <FolderGit2 size={18} aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
            <GithubIcon size={12} /> GitHub
          </span>
        </div>

        <h3 className="font-mono text-base font-semibold text-neutral-900 transition-colors group-hover:text-[#3B82F6] dark:text-white">
          {repo.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {repo.description ?? "No description provided."}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
          {repo.language && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              {repo.language}
            </span>
          )}
          <span className="inline-flex items-center gap-1"><Star size={13} /> {repo.stargazers_count}</span>
          <span className="inline-flex items-center gap-1"><GitFork size={13} /> {repo.forks_count}</span>
          {repo.homepage && (
            <span className="ml-auto inline-flex items-center gap-1 font-medium text-[#3B82F6]">
              Live Demo <ExternalLink size={12} />
            </span>
          )}
        </div>
      </a>
    </Reveal>
  );
}

export function GitHubRepos() {
  const state = useGitHubRepos();

  return (
    <section id="github" className="relative bg-neutral-50 py-20 dark:bg-neutral-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          title="From my GitHub"
          description="Real repositories pulled live from my GitHub profile — a reference of the projects I've actually been building."
          accent="green"
        />

        <Reveal>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <GithubIcon size={16} />
            github.com/{githubUsername}
            <ExternalLink size={14} className="text-neutral-400" />
          </a>
        </Reveal>

        {state.status === "loading" && (
          <div className="mt-10 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-300 p-10 text-neutral-500 dark:border-neutral-600 dark:text-neutral-400">
            <Loader2 size={18} className="animate-spin" /> Loading repositories…
          </div>
        )}

        {state.status === "error" && (
          <div className="mt-10 flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white p-10 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <AlertTriangle size={18} className="text-[#FF3B30]" /> {state.message}
          </div>
        )}

        {state.status === "success" && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {state.repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
