/**
 * SKILLS CONFIG — categories + items.
 * `level` accepts: "beginner" | "learning" | "comfortable" | "advanced"
 */

export type SkillLevel = "beginner" | "learning" | "comfortable" | "advanced";

export type Skill = { name: string; level: SkillLevel };

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accent: "red" | "green" | "blue";
  items: Skill[];
};

export const skillLevels: Record<SkillLevel, { label: string; accent: string }> =
  {
    beginner: { label: "Beginner", accent: "neutral" },
    learning: { label: "Learning", accent: "blue" },
    comfortable: { label: "Comfortable", accent: "green" },
    advanced: { label: "Advanced", accent: "red" },
  };

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, modern interfaces.",
    accent: "blue",
    items: [
      { name: "HTML", level: "comfortable" },
      { name: "CSS", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "React", level: "learning" },
      { name: "Tailwind CSS", level: "learning" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, data and server-side logic.",
    accent: "red",
    items: [
      { name: "Node.js", level: "learning" },
      { name: "REST APIs", level: "learning" },
      { name: "Databases", level: "beginner" },
      { name: "Authentication", level: "learning" },
      { name: "Webhooks", level: "learning" },
    ],
  },
  {
    id: "ai",
    title: "AI",
    description: "Working with models, agents & prompts.",
    accent: "green",
    items: [
      { name: "AI APIs", level: "learning" },
      { name: "LLM Integrations", level: "learning" },
      { name: "AI Agents", level: "beginner" },
      { name: "Prompt Engineering", level: "comfortable" },
      { name: "Automation", level: "learning" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Android and cross-platform experiments.",
    accent: "green",
    items: [
      { name: "Android", level: "learning" },
      { name: "Kotlin", level: "beginner" },
      { name: "XML", level: "beginner" },
      { name: "Capacitor", level: "beginner" },
    ],
  },
  {
    id: "linux",
    title: "Linux & Tools",
    description: "System-level tinkering and the terminal.",
    accent: "red",
    items: [
      { name: "Linux", level: "learning" },
      { name: "Termux", level: "comfortable" },
      { name: "Kali Linux", level: "beginner" },
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "CLI Tools", level: "comfortable" },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Connecting services & workflows.",
    accent: "blue",
    items: [
      { name: "n8n", level: "learning" },
      { name: "WhatsApp APIs", level: "learning" },
      { name: "Webhooks", level: "learning" },
      { name: "API Integrations", level: "learning" },
    ],
  },
];
