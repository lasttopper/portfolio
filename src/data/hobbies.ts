/**
 * HOBBIES & INTERESTS CONFIG — "Beyond Code".
 */

export type Hobby = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  accent: "red" | "green" | "blue";
};

export const hobbies: Hobby[] = [
  { id: "anime", title: "Anime & Manga", description: "Stories, worlds and art that inspire ideas.", emoji: "🍥", accent: "red" },
  { id: "gaming", title: "Gaming", description: "Playing and picking apart game systems.", emoji: "🕹️", accent: "green" },
  { id: "bgmi", title: "BGMI", description: "Battle royale sessions with the squad.", emoji: "🔫", accent: "red" },
  { id: "explore-tech", title: "Exploring Technology", description: "Always chasing the next interesting tool.", emoji: "🧭", accent: "blue" },
  { id: "android-exp", title: "Experimenting with Android", description: "Root, ROMs and pushing devices to their limits.", emoji: "🤖", accent: "green" },
  { id: "linux", title: "Linux", description: "Living in the terminal, one distro at a time.", emoji: "🐧", accent: "blue" },
  { id: "ai", title: "AI", description: "Testing models, agents and weird prompts.", emoji: "✨", accent: "green" },
  { id: "random-projects", title: "Building Random Projects", description: "If an idea pops up, it probably gets built.", emoji: "⚙️", accent: "red" },
  { id: "new-tools", title: "Learning New Tools", description: "New framework? New API? Sign me up.", emoji: "🔧", accent: "blue" },
  { id: "tech-content", title: "Watching Tech Content", description: "Dev logs, tutorials and tech breakdowns.", emoji: "📺", accent: "blue" },
  { id: "entrepreneurship", title: "Entrepreneurship", description: "Thinking about how ideas become products.", emoji: "🚀", accent: "green" },
];
