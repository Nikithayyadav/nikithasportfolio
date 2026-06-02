import { Section, SectionHeader } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { issuer: "SWECHA VISWAM IIITH", title: "Industry Skills Certification" },
  { issuer: "IBM SkillsBuild", title: "Professional Skills Track" },
  { issuer: "EY Skills", title: "Future Skills Program" },
  { issuer: "Microsoft Learn", title: "Microsoft Learning Programs" },
  { issuer: "JPMorgan Chase · Forage", title: "Software Engineering Virtual Exp." },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Certifications" title="Continuous Learning" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div key={c.issuer} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant transition-smooth hover:-translate-y-1">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-accent opacity-20 blur-2xl transition-smooth group-hover:opacity-40" />
            <Award className="h-8 w-8 text-gradient" />
            <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.issuer}</div>
            <div className="mt-1 font-display text-lg font-bold">{c.title}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
