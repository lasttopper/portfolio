import { useEffect, useState } from "react";
import { githubUsername } from "@/data/profile";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
};

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; repos: GitHubRepo[] };

/**
 * Fetches public repos for the configured GitHub username from the public
 * GitHub REST API (no auth token required for public data).
 * This imports real projects as references into the portfolio.
 */
export function useGitHubRepos() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
          { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
        const data: GitHubRepo[] = await res.json();
        const repos = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setState({ status: "success", repos });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setState({
            status: "error",
            message: "Couldn't load GitHub repos. Showing local projects instead.",
          });
        }
      }
    })();

    return () => controller.abort();
  }, []);

  return state;
}
