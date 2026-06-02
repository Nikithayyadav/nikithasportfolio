import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Goals } from "@/components/Goals";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandavena Nikitha — B.Tech CSE (AI) | Aspiring Software Developer" },
      { name: "description", content: "Portfolio of Chandavena Nikitha — B.Tech CSE (AI) student at ICFAI University, Hyderabad. Aspiring software developer, AI enthusiast and full stack learner." },
      { property: "og:title", content: "Chandavena Nikitha — Portfolio" },
      { property: "og:description", content: "Recruiter-friendly portfolio of an aspiring software developer and AI enthusiast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
