/**
 * CRAFT CONFIG — technical stack, process, experience, journey & soft skills.
 * All editable from here.
 */

/* ─────────────────── TECHNICAL STACK ─────────────────── */
export type StackCategory = {
  id: string;
  title: string;
  items: string[];
};

export const technicalStack: StackCategory[] = [
  { id: "languages", title: "Languages", items: ["JavaScript", "TypeScript", "Kotlin", "Python"] },
  { id: "web", title: "Full Stack / Web", items: ["React", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { id: "backend", title: "Backend & APIs", items: ["Node.js", "REST APIs", "Webhooks", "Authentication"] },
  { id: "databases", title: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
  { id: "ai", title: "AI & Automation", items: ["AI APIs", "LLM Integrations", "AI Agents", "n8n", "Prompt Engineering"] },
  { id: "tools", title: "Tools & CS Concepts", items: ["Git & GitHub", "VS Code", "Linux", "Termux", "Algorithms", "Deployment Workflow"] },
];

/* ─────────────────── PROCESS ("HOW I BUILD") ─────────────────── */
export type ProcessStage = {
  id: string;
  stage: string;
  title: string;
  details: string[];
};

export const processStages: ProcessStage[] = [
  { id: "understand", stage: "STAGE 01", title: "Understand", details: ["Idea", "Goals", "Requirements"] },
  { id: "design", stage: "STAGE 02", title: "Design", details: ["UI/UX", "Figma", "Layout", "Interaction"] },
  { id: "build", stage: "STAGE 03", title: "Build", details: ["Frontend", "Backend", "Components", "Code"] },
  { id: "refine", stage: "STAGE 04", title: "Refine", details: ["Testing", "Performance", "Polish"] },
];

/* ─────────────────── WORK EXPERIENCE ─────────────────── */
export type Experience = {
  id: string;
  years: string;
  category: string;
  role: string;
  description: string;
  skills: string[];
  tech: string[];
  accent: boolean;
};

export const experience: Experience[] = [
  {
    id: "personal",
    years: "Present",
    category: "PERSONAL",
    role: "Independent Builder",
    description:
      "Self-directed projects across web, Android and AI automation — learning full-stack, frontend and problem-solving in public.",
    skills: ["Full Stack", "Frontend", "UI/UX", "Problem Solving"],
    tech: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Git/GitHub"],
    accent: true,
  },
  {
    id: "freelance",
    years: "—",
    category: "FREELANCE",
    role: "Freelance Developer",
    description:
      "Exploring freelance work — building and fixing things for real people with real requirements (placeholder — honest).",
    skills: ["Web Development", "Feature Implementation", "Bug Fixing", "UI/UX"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    accent: false,
  },
  {
    id: "internship",
    years: "—",
    category: "INTERNSHIP",
    role: "Web Development Intern",
    description:
      "Open to internships — growing frontend and responsive-interface skills in a team environment (placeholder).",
    skills: ["Web Development", "Frontend", "Responsive Interfaces", "Team Collaboration"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    accent: false,
  },
];

/* ─────────────────── JOURNEY ("BEYOND CODE") ─────────────────── */
export type Chapter = {
  id: string;
  index: string;
  title: string;
  body: string;
};

export const chapters: Chapter[] = [
  { id: "school", index: "01", title: "School / Class 12", body: "The foundation years — where curiosity about how computers work first took root." },
  { id: "programming", index: "02", title: "Started Exploring Programming", body: "First lines of code, first 'hello world', first bugs — the beginning of everything." },
  { id: "android-linux", index: "03", title: "Android & Linux Experimentation", body: "Rooting, ROMs, Termux and getting genuinely comfortable inside the terminal." },
  { id: "web", index: "04", title: "Building Web Projects", body: "Moving from scripts to real, deployed websites and apps people can actually use." },
  { id: "ai", index: "05", title: "Exploring AI & Automation", body: "APIs, LLMs, agents and automation workflows — n8n, webhooks, and intelligent systems." },
  { id: "entrepreneurship", index: "06", title: "Entrepreneurship", body: "Thinking about how projects turn into products, services and real value." },
  { id: "always-learning", index: "07", title: "Always Learning", body: "The current chapter — full-stack, AI agents, and building in public, continuously." },
];

/* ─────────────────── CORE SOFT SKILLS ─────────────────── */
export type SoftSkill = {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon key, mapped in component
};

export const softSkills: SoftSkill[] = [
  { id: "leadership", title: "Leadership", description: "Taking initiative and owning ideas end-to-end.", icon: "flag" },
  { id: "communication", title: "Communication", description: "Clear, honest and direct — in code and chats.", icon: "message" },
  { id: "collaboration", title: "Team Collaboration", description: "Comfortable working alongside others toward a goal.", icon: "users" },
  { id: "problem-solving", title: "Problem Solving", description: "Breaking big problems into small, solvable steps.", icon: "puzzle" },
  { id: "adaptability", title: "Adaptability", description: "New tools, new stacks — learning fast and pivoting.", icon: "refresh" },
  { id: "creativity", title: "Creativity", description: "Finding fresh angles and building things just to see.", icon: "sparkles" },
  { id: "time-management", title: "Time Management", description: "Shipping small wins consistently, on a schedule.", icon: "clock" },
  { id: "curiosity", title: "Curiosity", description: "The engine underneath everything else.", icon: "search" },
];
