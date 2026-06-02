import { ArrowRight, Github, Linkedin, Mail, FileDown } from "lucide-react";
import heroAsset from "@/assets/nikitha-profile.jpg.asset.json";
import resumeAsset from "@/assets/nikitha-resume.pdf.asset.json";
const heroImg = heroAsset.url;

const stats = [
  { value: "8.5", label: "CGPA / 10" },
  { value: "3+", label: "Internships" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Certifications" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-cyan/30 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            Open to internships & full-time roles
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            Hello, I'm <br />
            <span className="text-gradient">Chandavena Nikitha</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            B.Tech CSE (AI) · Aspiring Software Developer · Full Stack Learner
          </p>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Final-year Computer Science (AI) student at ICFAI University, Hyderabad. Passionate about
            building thoughtful software, exploring AI, and growing in fast-paced engineering teams.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-muted"
            >
              <FileDown className="h-4 w-4" /> View Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-muted-foreground">
            <a href="https://github.com/Nikithayyadav" target="_blank" rel="noreferrer" className="rounded-full p-2 transition-smooth hover:bg-muted hover:text-foreground" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/nikitha29" target="_blank" rel="noreferrer" className="rounded-full p-2 transition-smooth hover:bg-muted hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:CHANDAVENANIKITHA9@GMAIL.COM" className="rounded-full p-2 transition-smooth hover:bg-muted hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-hero blur-2xl opacity-60" />
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <img
              src={heroImg}
              alt="Chandavena Nikitha"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass px-5 py-3 text-sm shadow-elegant sm:block animate-float">
            <div className="font-display text-2xl font-bold text-gradient">8.5</div>
            <div className="text-xs text-muted-foreground">CGPA / 10</div>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-2xl glass px-4 py-3 text-sm shadow-elegant sm:block animate-float [animation-delay:1s]">
            <div className="font-display text-xl font-bold">AI ✨</div>
            <div className="text-xs text-muted-foreground">Enthusiast</div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl glass p-5 text-center transition-smooth hover:shadow-glow">
            <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
