import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Medibot",
    desc: "AI-powered healthcare assistant offering symptom guidance, built with Hugging Face transformers and modern AI tooling.",
    tags: ["Python", "AI", "Hugging Face"],
    repo: "https://github.com/Nikithayyadav",
  },
  {
    title: "PastPoint",
    desc: "Interactive historical exploration platform with map-based discovery — built using Python & Streamlit.",
    tags: ["Python", "Streamlit", "Maps"],
    repo: "https://github.com/Nikithayyadav",
  },
  {
    title: "Tale of a Word",
    desc: "Streamlit-based interactive educational experience around language and storytelling.",
    tags: ["Python", "Streamlit"],
    repo: "https://github.com/Nikithayyadav",
  },
  {
    title: "Hangman Game",
    desc: "Classic Python project demonstrating logic building, control flow, and clean structure.",
    tags: ["Python", "Game"],
    repo: "https://github.com/Nikithayyadav",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/40">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        description="A selection of things I've built while learning, exploring AI, and shipping side projects."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-elegant transition-smooth hover:-translate-y-1">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-accent" />
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full p-2 transition-smooth hover:bg-muted" aria-label={`${p.title} on GitHub`}>
                <Github className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-5">
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-gradient">
                View Project <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="https://github.com/Nikithayyadav"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-muted"
        >
          <Github className="h-4 w-4" /> See all on GitHub
        </a>
      </div>
    </Section>
  );
}
