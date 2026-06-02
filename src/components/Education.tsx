import { Section, SectionHeader } from "./Section";
import { GraduationCap } from "lucide-react";

const courses = [
  "Artificial Intelligence",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Web Development",
  "Cloud Computing",
];

export function Education() {
  return (
    <Section id="education" className="bg-muted/40">
      <SectionHeader eyebrow="Education" title="Academic Journey" />
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elegant">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-gradient-accent px-3 py-1 text-xs font-semibold text-primary-foreground">2023 — 2027</span>
                <span className="text-xs text-muted-foreground">Expected Graduation: 2027</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">B.Tech, Computer Science & Engineering (AI)</h3>
              <p className="mt-1 text-muted-foreground">ICFAI University, Hyderabad</p>
              <p className="mt-2 text-sm">
                <span className="font-semibold">CGPA:</span> <span className="text-gradient font-bold">8.5 / 10</span>
              </p>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Relevant Coursework</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {courses.map((c) => (
                    <span key={c} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
