import { Github, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 flex gap-4">
      <a
        href="https://github.com/CreepsoOff"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/fabian-gelin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}