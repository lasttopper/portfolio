import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { WhatIDo } from "@/sections/WhatIDo";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { GitHubRepos } from "@/sections/GitHubRepos";
import { CurrentlyExploring } from "@/sections/CurrentlyExploring";
import { Hobbies } from "@/sections/Hobbies";
import { Stats } from "@/sections/Stats";
import { Journey } from "@/sections/Journey";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="app-root min-h-screen text-ink dark:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <GitHubRepos />
        <CurrentlyExploring />
        <Hobbies />
        <Stats />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
