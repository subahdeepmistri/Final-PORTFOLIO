import Hero from "@/components/features/home/Hero";
import About from "@/components/features/about/About";
import Skills from "@/components/features/skills/Skills";
import Projects from "@/components/features/projects/Projects";
import Contact from "@/components/features/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
