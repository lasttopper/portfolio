/**
 * PROJECTS CONFIG — central, editable list of projects.
 * `githubUrl`: set to a specific repo URL when one exists, or leave empty ("")
 * to auto-fall back to the GitHub profile.
 */

import { githubUsername } from "./profile";

export const githubProfileUrl = `https://github.com/${githubUsername}`;

export function projectGitHubUrl(url: string): string {
  return url && url.trim().length > 0 ? url : githubProfileUrl;
}

export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Experiment"
  | "Learning Project";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  accent: "red" | "green" | "blue";
  githubUrl: string;
  liveUrl: string;
  accentEmoji: string;
  // detail view
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    id: "last-topper",
    name: "Last Topper",
    tagline: "Study-focused web/app project for competitive exam prep.",
    description:
      "A study-focused web/app project designed around competitive exam preparation — notes, practice and tracking.",
    tech: ["React", "Tailwind CSS", "Node.js", "Database"],
    status: "Live",
    accent: "blue",
    githubUrl: "https://github.com/lasttopper/Last-topper",
    liveUrl: "https://last-topper.vercel.app",
    accentEmoji: "📚",
    overview:
      "Last Topper is a study companion concept for students preparing for competitive exams. It brings study material, practice sets and progress tracking into a single clean interface.",
    problem:
      "Students preparing for competitive exams juggle scattered notes, multiple apps and inconsistent schedules — making focused revision harder than it needs to be.",
    solution:
      "A consolidated study app that organises subjects, topics and practice in one place with a simple progress tracker to keep momentum.",
    features: [
      "Subject & topic organisation",
      "Practice question banks",
      "Personal progress tracking",
      "Clean, distraction-free UI",
      "Notes & revision lists",
    ],
    screenshots: [],
  },
  {
    id: "ai-sales-agency",
    name: "AI Sales Agency",
    tagline: "Automation concept for lead generation & website building.",
    description:
      "An automation concept for discovering businesses, contacting potential clients, collecting requirements and generating websites.",
    tech: ["AI", "Automation", "n8n", "Webhooks", "APIs"],
    status: "Experiment",
    accent: "green",
    githubUrl: "",
    liveUrl: "",
    accentEmoji: "🤖",
    overview:
      "An end-to-end automation concept that finds businesses online, reaches out, gathers requirements and drafts website deliverables — powered by AI and automation tools.",
    problem:
      "Manual outreach and requirement-gathering for website projects is repetitive and time-consuming.",
    solution:
      "A pipeline of automations (discovery → outreach → requirements → generation) that reduces the manual effort of client acquisition.",
    features: [
      "Business discovery workflow",
      "Automated outreach",
      "Requirement collection",
      "AI website draft generation",
      "Dashboard for pipeline tracking",
    ],
    screenshots: [],
  },
  {
    id: "whatsapp-ai-automation",
    name: "WhatsApp AI Automation",
    tagline: "AI replies + on/off control dashboard.",
    description:
      "An automation system concept using WhatsApp APIs, AI responses and an on/off control dashboard.",
    tech: ["WhatsApp API", "AI", "Node.js", "Dashboard"],
    status: "Experiment",
    accent: "green",
    githubUrl: "https://github.com/lasttopper/Whatsapp-automation",
    liveUrl: "",
    accentEmoji: "💬",
    overview:
      "A WhatsApp automation concept where AI generates contextual replies, controlled through a simple on/off dashboard.",
    problem:
      "Responding to repetitive WhatsApp enquiries takes up lots of time and can't be scaled manually.",
    solution:
      "An AI assistant that handles common conversations, with a dashboard to toggle automation on/off and review conversations.",
    features: [
      "AI-powered replies",
      "On/off control dashboard",
      "Webhook message handling",
      "Conversation logging",
      "Custom response rules",
    ],
    screenshots: [],
  },
  {
    id: "bgmi-gaming-utility",
    name: "BGMI Gaming Utility",
    tagline: "Gaming-focused utility/project concept.",
    description:
      "A gaming-focused utility/project concept for BGMI players — tools, stats and customisation.",
    tech: ["Android", "Utility", "Concept"],
    status: "Learning Project",
    accent: "red",
    githubUrl: "",
    liveUrl: "",
    accentEmoji: "🎮",
    overview:
      "A gaming utility concept exploring tools and customisations around BGMI — built as a learning project around the Android ecosystem.",
    problem:
      "Players often want quick access to tools, stats and customisation options without navigating heavy apps.",
    solution:
      "A lightweight utility concept that groups useful gaming tools and resources into one accessible place.",
    features: ["Quick-use tools", "Stats & tracking ideas", "Customisation experiments", "Android-first design"],
    screenshots: [],
  },
  {
    id: "ai-image-generator",
    name: "AI Image Generator",
    tagline: "Web-based AI image generation experiment.",
    description:
      "A web-based AI image generation experiment using AI APIs and a simple prompt interface.",
    tech: ["React", "AI APIs", "Tailwind CSS"],
    status: "Experiment",
    accent: "blue",
    githubUrl: "",
    liveUrl: "",
    accentEmoji: "🎨",
    overview:
      "A simple web experiment that turns text prompts into images using AI APIs — an exercise in API integration and UX.",
    problem:
      "Using AI image tools is often buried behind complex interfaces and paid walls.",
    solution:
      "A minimal web UI that accepts a prompt and returns generated images, focused on a clean interaction flow.",
    features: ["Prompt input", "Image output gallery", "API integration", "Download / save"],
    screenshots: [],
  },
  {
    id: "devforge",
    name: "DevForge",
    tagline: "Websites that help businesses grow.",
    description:
      "DevForge — a web development brand for building websites that help businesses grow online, published live via GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    status: "Live",
    accent: "green",
    githubUrl: "https://github.com/lasttopper/DevForge.github.io",
    liveUrl: "https://lasttopper.github.io/DevForge.github.io/",
    accentEmoji: "🔨",
    overview:
      "DevForge is a live web development brand and site — focused on building websites that help businesses grow online. It serves as both a showcase and a real, deployed product.",
    problem:
      "Small businesses often struggle to establish a clean, credible online presence that actually helps them convert visitors into customers.",
    solution:
      "A polished, mobile-friendly website that positions DevForge as a go-to for business websites, complete with clear messaging and a modern layout.",
    features: [
      "Responsive business website",
      "Modern landing layout",
      "Privacy & terms pages",
      "SEO-ready structure",
      "Deployed on GitHub Pages",
    ],
    screenshots: [],
  },
];
