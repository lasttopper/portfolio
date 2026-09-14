import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";
import { profile, emailAddress, contactLinks } from "@/data/profile";
import { GithubIcon, XIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const footerLinks = [
  { id: "github", label: "GitHub" },
  { id: "x", label: "X" },
  { id: "instagram", label: "Instagram" },
];

export function Footer() {
  const linkFor = (id: string) => contactLinks.find((l) => l.id === id);

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <Reveal y={15}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <Logo className="justify-center md:justify-start" />
            <p className="mt-3 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">{profile.footerTagline}</p>
          </div>

          <nav aria-label="Footer links">
            <ul className="flex items-center gap-6">
              {footerLinks.map((l) => {
                const link = linkFor(l.id);
                const href = link?.url && link.url.length > 0 ? link.url : "#";
                return (
                  <li key={l.id}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    >
                      <span className="icon-motion inline-flex">
                        {l.id === "github" && <GithubIcon size={16} />}
                        {l.id === "x" && <XIcon size={16} />}
                        {l.id === "instagram" && <InstagramIcon size={16} />}
                      </span>
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href={`mailto:${emailAddress}`} className="group flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  <span className="icon-motion inline-flex"><Mail size={16} /></span> Email
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-400 dark:border-neutral-800 sm:flex-row">
          <p>{profile.copyright}</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF3B30]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
          </p>
        </div>
      </div>
      </Reveal>
    </footer>
  );
}
