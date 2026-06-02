import { Section, SectionHeader } from "./Section";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Internship opportunities",
  "Software Development roles",
  "AI / Machine Learning roles",
  "Full Stack Development roles",
  "Entry-level technology positions",
  "Learning-oriented engineering teams",
];

export function Goals() {
  return (
    <Section id="goals">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-elegant md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/40 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-purple/40 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">Career Goals</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">What I'm Looking For</h2>
            <p className="mt-4 max-w-md opacity-90">
              I'm eager to join a team where I can keep learning, build production software, and contribute meaningful
              work from day one. Open to relocation and remote roles.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i} className="flex items-start gap-2 rounded-xl bg-white/10 p-3 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
