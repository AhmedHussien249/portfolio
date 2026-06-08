import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        
        <Experience />

        <Projects />

        {/* Placeholder for Skills Section */}
        <div id="skills" className="py-1" />

        {/* Placeholder for Contact Section */}
        <div id="contact" className="py-1" />
      </main>
    </div>
  );
}
