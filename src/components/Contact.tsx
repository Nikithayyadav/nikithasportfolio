import { useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const channels = [
  { icon: Mail, label: "Email", value: "CHANDAVENANIKITHA9@GMAIL.COM", href: "mailto:CHANDAVENANIKITHA9@GMAIL.COM" },
  { icon: Phone, label: "Phone", value: "+91 85229 52603", href: "tel:+918522952603" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  { icon: Github, label: "GitHub", value: "@Nikithayyadav", href: "https://github.com/Nikithayyadav" },
  { icon: Linkedin, label: "LinkedIn", value: "in/nikitha29", href: "https://www.linkedin.com/in/nikitha29" },
  { icon: Code2, label: "LeetCode", value: "Nikitha2909", href: "https://www.leetcode.com/Nikitha2909" },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/chandavenanikitha9@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          _subject: "New portfolio contact message",
          _captcha: "false",
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Failed to send message");
      }
      setStatus("success");
      toast.success("Message sent! I'll be in touch soon.");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setErrorMsg(msg);
      setStatus("error");
      toast.error(msg);
    }
  };

  const isLoading = status === "loading";

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

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-elegant">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">Message sent!</h3>
            <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-medium transition-smooth hover:bg-muted"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-elegant"
          >
            <h3 className="font-display text-xl font-bold">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">I usually respond within 24 hours.</p>
            <div className="mt-5 space-y-4">
              <input required name="name" disabled={isLoading} placeholder="Your name" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:opacity-60" />
              <input required type="email" name="email" disabled={isLoading} placeholder="Email" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:opacity-60" />
              <textarea required name="message" rows={4} disabled={isLoading} placeholder="Tell me about the opportunity..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-ring focus:ring-2 focus:ring-ring/30 disabled:opacity-60" />

              {status === "error" && (
                <div role="alert" className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorMsg || "Failed to send. Please try again."}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {isLoading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
