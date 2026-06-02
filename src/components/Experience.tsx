import { Section, SectionHeader } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    org: "Swecha Viswam × IIIT Hyderabad",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Worked on AI-related initiatives and research workflows.",
      "Collaborated in cross-functional team projects.",
      "Gained hands-on exposure to real-world ML pipelines.",
    ],
  },
  {
    role: "Python Programming Intern",
    org: "CodeAlpha",
    period: "Internship",
    points: [
      "Developed multiple Python-based mini projects.",
      "Improved debugging and clean-code practices.",
      "Authored documentation and project demos.",
    ],
  },
  {
    role: "Software Engineering Virtual Experience",
    org: "JPMorgan Chase · Forage",
    period: "Virtual Program",
    points: [
      "Simulated real engineering workflows at JPMC.",
      "Practiced professional code review and tooling.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="Where I've Worked & Learned" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-cyan to-transparent md:left-1/2" />
        <div className="space-y-8">
          {experiences.map((e, i) => (
            <div key={e.role} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className={`pl-14 md:pl-0 ${i % 2 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant transition-smooth hover:-translate-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-gradient">{e.period}</div>
                  <h3 className="mt-1 font-display text-lg font-bold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <ul className={`mt-3 space-y-1 text-sm text-muted-foreground ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    {e.points.map((p) => <li key={p}>· {p}</li>)}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-5 top-6 -translate-x-1/2 md:left-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow ring-4 ring-background">
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
