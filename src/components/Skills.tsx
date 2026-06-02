import { Section, SectionHeader } from "./Section";
import { Code2, Globe, Cloud, Users } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    icon: Globe,
    title: "Web & Full Stack",
    items: [
      { name: "HTML / CSS", level: 88 },
      { name: "JavaScript", level: 75 },
      { name: "Full Stack Dev", level: 65 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    items: [
      { name: "AWS", level: 70 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    icon: Users,
    title: "Professional",
    items: [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 92 },
      { name: "Leadership", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/40">
      <SectionHeader eyebrow="Skills" title="Tools of the Trade" />
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{g.title}</h3>
            </div>
            <div className="mt-5 space-y-4">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-accent transition-smooth" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
