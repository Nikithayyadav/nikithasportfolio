import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "CHANDAVENANIKITHA9@GMAIL.COM", href: "mailto:CHANDAVENANIKITHA9@GMAIL.COM" },
  { icon: Phone, label: "Phone", value: "+91 85229 52603", href: "tel:+918522952603" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  { icon: Github, label: "GitHub", value: "@Nikithayyadav", href: "https://github.com/Nikithayyadav" },
  { icon: Linkedin, label: "LinkedIn", value: "in/nikitha29", href: "https://www.linkedin.com/in/nikitha29" },
  { icon: Code2, label: "LeetCode", value: "Nikitha2909", href: "https://www.leetcode.com/Nikitha2909" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" className="bg-muted/40">
      <SectionHeader eyebrow="Contact" title="Let's Build Something Together" description="Got a role, project, or opportunity in mind? I'd love to hear from you." />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          {channels.map((c) => {
            const Inner = (
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-6 shadow-elegant"
        >
          <h3 className="font-display text-xl font-bold">Send a message</h3>
          <p className="mt-1 text-sm text-muted-foreground">I usually respond within 24 hours.</p>
          <div className="mt-5 space-y-4">
            <input required placeholder="Your name" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30" />
            <textarea required rows={4} placeholder="Tell me about the opportunity..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30" />
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.01]">
              {sent ? "Thanks! I'll be in touch." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
