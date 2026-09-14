import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import {
  Globe, Smartphone, Sparkles, Wand2, Terminal, ShieldCheck, Palette, Rocket, TrendingUp, FlaskConical,
} from "lucide-react";

const interests = [
  { icon: Globe, label: "Web Development", accent: "text-[#3B82F6]" },
  { icon: Smartphone, label: "App Development", accent: "text-[#22C55E]" },
  { icon: Sparkles, label: "AI Tools", accent: "text-[#22C55E]" },
  { icon: Wand2, label: "Automation", accent: "text-[#FF3B30]" },
  { icon: Smartphone, label: "Android Customization", accent: "text-[#22C55E]" },
  { icon: Terminal, label: "Linux", accent: "text-[#FF3B30]" },
  { icon: ShieldCheck, label: "Cybersecurity Learning", accent: "text-[#3B82F6]" },
  { icon: Palette, label: "UI/UX", accent: "text-[#3B82F6]" },
  { icon: Rocket, label: "Building Online Projects", accent: "text-[#FF3B30]" },
  { icon: TrendingUp, label: "Entrepreneurship", accent: "text-[#22C55E]" },
  { icon: FlaskConical, label: "Technology Experimentation", accent: "text-[#3B82F6]" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About Me" title="Curious by nature. Builder by habit." accent="red" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="surface hover-lift relative overflow-hidden rounded-2xl p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-5">
                <img
                  src="images/avatar.png"
                  alt="Stylized 3D illustration representing Vikash"
                  className="h-20 w-20 rounded-2xl border border-neutral-200 object-cover shadow-md dark:border-neutral-700"
                  loading="lazy"
                />
                <div>
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">{profile.name}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{profile.tagline}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
                {profile.shortBio}
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                I don't have a wall of certificates or a long list of employers — what I do have is a
                genuine obsession with how things work and a habit of turning curiosity into small,
                tangible projects. I'm a student of the craft, learning in public and building as I go.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Currently based in</span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-semibold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  📍 {profile.location}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {interests.map((item, i) => (
              <Reveal key={item.label} direction="right" delay={i * 0.04}>
                <div className="group hover-lift flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 transition-all duration-200 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900">
                  <item.icon size={18} className={item.accent} aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
