/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE CONFIG — single source of truth for personal info
 *  Edit values here to update the whole portfolio.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Vikash",
  brandLogo: "VIKASH",
  tagline: "Developer • Builder • Tech Explorer • Student",
  headline: "I Build. I Learn. I Experiment.",
  intro:
    "I enjoy building websites, applications and automation systems — experimenting with Android/Linux technologies and exploring AI-powered tools along the way.",
  shortBio:
    "I'm a curious developer who loves turning ideas into working things. My days are spent learning new tools, breaking things on purpose, and building small projects that actually solve problems.",
  location: "India",
  roles: ["Developer", "Builder", "Tech Explorer", "Student"],
  footerTagline: "Building, learning and experimenting with technology.",
  copyright: "© 2026 Vikash. Built with curiosity & code.",
};

export const availability = {
  status: "available" as "available" | "busy" | "offline",
  label: "Open to Opportunities",
  text: "Available for selected freelance projects, collaborations and interesting tech projects.",
};

export const emailAddress = "vikash877.work@gmail.com";
export const githubUsername = "lasttopper";
export const whatsappNumber = "919919682922";

export type ContactLink = {
  id: string;
  label: string;
  value: string;
  url: string;
  description: string;
  type: "email" | "link" | "whatsapp";
  copyable?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: emailAddress,
    url: `mailto:${emailAddress}`,
    description: "For projects, collaborations & questions.",
    type: "email",
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/lasttopper",
    url: "https://github.com/lasttopper",
    description: "Code, experiments & open-source projects.",
    type: "link",
  },
  {
    id: "x",
    label: "X / Twitter",
    value: "@vikash_raj_777",
    url: "https://x.com/vikash_raj_777",
    description: "Thoughts, snippets & tech takes.",
    type: "link",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@code.withvikki",
    url: "https://www.instagram.com/code.withvikki",
    description: "Snippets of work, life & experiments.",
    type: "link",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 99196 82922",
    url: "https://wa.me/919919682922?text=Hi%20Vikash%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect!",
    description: "Quick chats & project enquiries.",
    type: "whatsapp",
    copyable: true,
  },
];

export const contactConfig = {
  provider: "YOUR_PROVIDER",
  endpoint: "",
  enabled: false,
};

export const showContactFallback = true;

export const stats = [
  { id: "projects", value: "10+", label: "Projects Built" },
  { id: "tech", value: "20+", label: "Technologies Exploring" },
  { id: "years", value: "—", label: "Years Learning" },
  { id: "focus", value: "AI + Web", label: "Current Focus" },
];
