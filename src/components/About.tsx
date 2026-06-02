import { Section, SectionHeader } from "./Section";
import { Sparkles, Target, Users, Rocket } from "lucide-react";

const cards = [
  { icon: Sparkles, title: "Learning Mindset", text: "Always curious — picking up new languages, frameworks, and AI techniques every month." },
  { icon: Target, title: "Goal Oriented", text: "Focused on landing impactful internships and contributing to production engineering teams." },
  { icon: Users, title: "Team Player", text: "Collaborative, communicative, and comfortable owning my slice of the roadmap." },
  { icon: Rocket, title: "Builder", text: "From AI healthcare bots to interactive games — I love shipping things that work." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Me"
        title="Designing solutions, not just code"
        description="I'm a final-year CSE (AI) student passionate about software development, artificial intelligence, and cloud technologies. My goal: gain real industry experience and build a meaningful career in tech."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.title} className="group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
