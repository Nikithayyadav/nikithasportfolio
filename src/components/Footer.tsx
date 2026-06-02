import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground">N</span>
          Chandavena Nikitha
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Chandavena Nikitha · Built with passion in Hyderabad.</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <a href="https://github.com/Nikithayyadav" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/nikitha29" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:CHANDAVENANIKITHA9@GMAIL.COM" className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
