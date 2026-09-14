/**
 * JOURNEY / TIMELINE CONFIG — editable milestones.
 * No invented dates — use placeholders where unknown.
 */

export type Milestone = {
  id: string;
  title: string;
  description: string;
  date: string;
  accent: "red" | "green" | "blue";
  status: "completed" | "current";
};

export const journey: Milestone[] = [
  {
    id: "school",
    title: "School / Class 12",
    description: "The foundation years — where curiosity about computers began.",
    date: "Class 12",
    accent: "blue",
    status: "completed",
  },
  {
    id: "programming",
    title: "Started Exploring Programming",
    description: "First lines of code, first 'hello world', first bugs.",
    date: "—",
    accent: "green",
    status: "completed",
  },
  {
    id: "android-linux",
    title: "Android & Linux Experimentation",
    description: "Rooting, ROMs, Termux and getting comfortable in the terminal.",
    date: "—",
    accent: "red",
    status: "completed",
  },
  {
    id: "web-projects",
    title: "Started Building Web Projects",
    description: "Moving from scripts to real, deployed websites and apps.",
    date: "—",
    accent: "blue",
    status: "completed",
  },
  {
    id: "ai",
    title: "Started Exploring AI",
    description: "APIs, LLMs, agents and prompt engineering experiments.",
    date: "—",
    accent: "green",
    status: "completed",
  },
  {
    id: "automation",
    title: "Started Automation Projects",
    description: "Connecting services, webhooks and building workflows with n8n.",
    date: "—",
    accent: "red",
    status: "completed",
  },
  {
    id: "entrepreneurship",
    title: "Started Exploring Entrepreneurship",
    description: "Thinking about how projects turn into products and services.",
    date: "—",
    accent: "blue",
    status: "completed",
  },
  {
    id: "current",
    title: "Current Learning Journey",
    description: "Deep-diving into full-stack, AI agents and building in public.",
    date: "Now",
    accent: "green",
    status: "current",
  },
];

export const currentlyExploring: { id: string; title: string; emoji: string }[] =
  [
    { id: "ai-agents", title: "AI Agents", emoji: "🤖" },
    { id: "ai-automation", title: "AI Automation", emoji: "⚡" },
    { id: "fullstack", title: "Full-stack Development", emoji: "🧩" },
    { id: "react-adv", title: "Advanced React", emoji: "⚛️" },
    { id: "android-dev", title: "Android Development", emoji: "📱" },
    { id: "linux", title: "Linux", emoji: "🐧" },
    { id: "cybersec", title: "Cybersecurity Fundamentals", emoji: "🛡️" },
    { id: "saas", title: "SaaS Ideas", emoji: "💡" },
    { id: "web-business", title: "Web Business", emoji: "🌐" },
    { id: "api-integrations", title: "API Integrations", emoji: "🔌" },
  ];

export type Service = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  accent: "red" | "green" | "blue";
  emoji: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern responsive websites, landing pages and business websites.",
    tech: ["HTML", "CSS", "JS", "React", "Tailwind"],
    accent: "blue",
    emoji: "🌐",
  },
  {
    id: "app",
    title: "App Development",
    description: "Android applications and experimental mobile projects.",
    tech: ["Android", "Kotlin", "XML", "Capacitor"],
    accent: "green",
    emoji: "📱",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "AI-powered tools, agents, APIs, automation workflows and intelligent systems.",
    tech: ["AI APIs", "n8n", "Agents", "Webhooks"],
    accent: "red",
    emoji: "🤖",
  },
  {
    id: "linux-android",
    title: "Linux & Android",
    description: "Linux environments, Android customization, root-related experimentation and system-level learning.",
    tech: ["Linux", "Termux", "Root", "CLI"],
    accent: "red",
    emoji: "🐧",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    description: "Building useful web applications and tools with practical real-world applications.",
    tech: ["React", "Node.js", "Tools"],
    accent: "blue",
    emoji: "🧰",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description: "Exploring ways to turn software projects into useful products and services.",
    tech: ["Product", "Ideas", "SaaS"],
    accent: "green",
    emoji: "🚀",
  },
];
