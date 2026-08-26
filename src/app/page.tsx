import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-bg overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />

        <Projects />

        <Skills />

        <Experience />

        <Contact />
      </main>
    </div>
  );
}
