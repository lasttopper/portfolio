import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon, XIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Mail, Copy, Check, MessageCircle, Link2, Send, Loader2, AlertCircle, ArrowRight, Eraser } from "lucide-react";
import { availability, contactLinks, contactConfig, showContactFallback, emailAddress, whatsappNumber } from "@/data/profile";
import { accentStyles } from "@/data/theme";
import { useTilt } from "@/hooks/useTilt";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const cardAccents = ["red", "blue", "green", "red", "green", "blue"] as const;

function brandIconFor(id: string, size = 20) {
  switch (id) {
    case "github": return <GithubIcon size={size} />;
    case "x": return <XIcon size={size} />;
    case "instagram": return <InstagramIcon size={size} />;
    case "email": return <Mail size={size} />;
    case "whatsapp": return <MessageCircle size={size} />;
    default: return <Link2 size={size} />;
  }
}

function ContactCard({ link, index }: { link: (typeof contactLinks)[number]; index: number }) {
  const reduced = useReducedMotion();
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>(8, !reduced);
  const accent = accentStyles[cardAccents[index % cardAccents.length]];
  const [copied, setCopied] = useState(false);

  const href = link.url && link.url.length > 0 ? link.url : link.type === "email" ? `mailto:${link.value}` : "#contact";

  const copy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(link.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="surface group relative flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <span className={`absolute right-4 top-4 h-2 w-2 rounded-full ${accent.dot}`} aria-hidden="true" />
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${accent.border} ${accent.bgSoft} ${accent.text}`} aria-hidden="true">
        {brandIconFor(link.id)}
      </div>
      <h3 className="text-base font-bold text-neutral-900 dark:text-white">{link.label}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{link.description}</p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="truncate text-xs font-medium text-neutral-400">{link.value}</span>
        {link.copyable && (
          <button
            type="button"
            onClick={copy}
            aria-label={`Copy ${link.label}`}
            className="inline-flex shrink-0 items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-1 text-[11px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {copied ? (<><Check size={12} className="text-[#22C55E]" /> Copied!</>) : (<><Copy size={12} /> Copy</>)}
          </button>
        )}
      </div>
    </a>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (honeypot.current?.value) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) { setStatus("error"); return; }

    if (!contactConfig.enabled || !contactConfig.endpoint) {
      try {
        const subject = encodeURIComponent(`Portfolio message from ${name} (${String(data.get("subject") ?? "") || "Project enquiry"})`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${encodeURIComponent(message)}`;
        setStatus("success");
      } catch { setStatus("error"); }
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(contactConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, ...Object.fromEntries(data.entries()) }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch { setStatus("error"); }
  };

  const clearForm = () => { formRef.current?.reset(); setStatus("idle"); };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="Have an idea, project, collaboration or just want to say hello? Let's connect."
          accent="red"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
                I'm always up for an interesting idea, a tricky problem or a good conversation about tech.
              </p>

              <div className="surface hover-lift rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    {availability.status === "available" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                    )}
                    <span className={`relative inline-flex h-3 w-3 rounded-full ${availability.status === "available" ? "bg-[#22C55E]" : "bg-neutral-400"}`} />
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">{availability.label}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{availability.text}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <MagneticButton href={`mailto:${emailAddress}`} variant="primary">
                  <Mail size={16} /> Email Me
                </MagneticButton>
                <MagneticButton href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hey Vikash, I found your portfolio and wanted to connect!")}`} variant="secondary" target="_blank">
                  <MessageCircle size={16} /> WhatsApp
                </MagneticButton>
                <MagneticButton onClick={copyEmail} variant="secondary">
                  {copied ? (<><Check size={16} className="text-[#22C55E]" /> Email copied!</>) : (<><Copy size={16} /> Copy Email</>)}
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="surface rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name" required>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
                </Field>
                <Field label="Email Address" htmlFor="email" required>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputClass} />
                </Field>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Subject" htmlFor="subject">
                  <input id="subject" name="subject" type="text" placeholder="Project idea…" className={inputClass} />
                </Field>
                <Field label="Project Type (optional)" htmlFor="projectType">
                  <select id="projectType" name="projectType" className={inputClass}>
                    <option value="">Select…</option>
                    <option value="website">Website</option>
                    <option value="app">Mobile App</option>
                    <option value="automation">Automation</option>
                    <option value="ai">AI Tool</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Budget Range (optional)" htmlFor="budget">
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Select…</option>
                    <option value="under-100">Under $100</option>
                    <option value="100-500">$100 – $500</option>
                    <option value="500-2000">$500 – $2000</option>
                    <option value="2000-plus">$2000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" htmlFor="message" required>
                  <textarea id="message" name="message" required rows={4} placeholder="Tell me about your idea…" className={inputClass} />
                </Field>
              </div>

              <input
                ref={honeypot}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none fixed opacity-0"
                style={{ width: 1, height: 1, top: 0, left: 0, overflow: "hidden", clip: "rect(0 0 0 0)", clipPath: "inset(50%)", whiteSpace: "nowrap" }}
              />

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <MagneticButton type="submit" variant="accent-red" className="disabled:opacity-50">
                  {status === "loading" ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>) : (<><Send size={16} /> Send Message</>)}
                </MagneticButton>
                <MagneticButton onClick={clearForm} variant="secondary" type="button">
                  <Eraser size={16} /> Clear
                </MagneticButton>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center gap-2 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/10 px-4 py-3 text-sm font-medium text-[#16a34a] dark:text-[#4ade80]" role="status">
                    <Check size={16} /> Message ready to send — I'll get back to you soon!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center gap-2 rounded-lg border border-[#FF3B30]/30 bg-[#FF3B30]/10 px-4 py-3 text-sm font-medium text-[#FF3B30] dark:text-[#FF6B61]" role="alert">
                    <AlertCircle size={16} /> Please make sure all required fields are filled correctly.
                  </motion.p>
                )}
              </AnimatePresence>

              {showContactFallback && !contactConfig.enabled && (
                <p className="mt-4 text-xs text-neutral-400">
                  Please contact me directly using the links above — or use the buttons to email / WhatsApp me.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, i) => (
            <Reveal key={link.id} delay={i * 0.05} className="h-full">
              <ContactCard link={link} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="surface-dark relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Got an idea?</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Let's turn it into <span className="text-[#3B82F6]">something</span> <span className="text-[#22C55E]">real</span><span className="text-[#FF3B30]">.</span>
              </h2>
              <div className="mt-8 flex justify-center">
                <MagneticButton href={`mailto:${emailAddress}`} variant="primary">
                  Start a Conversation <ArrowRight size={16} />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "input-focus w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100";

function Field({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {label}
        {required && <span className="ml-0.5 text-[#FF3B30]">*</span>}
      </label>
      {children}
    </div>
  );
}
