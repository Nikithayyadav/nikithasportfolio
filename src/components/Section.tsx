import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
