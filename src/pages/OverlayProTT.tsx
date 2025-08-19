import { Button } from '@/components/ui/button';
import { Github, ImageDown, Palette, MoveDiagonal } from 'lucide-react';

export function OverlayProTT() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#934bc6] to-[#3e197b] text-transparent bg-clip-text">
        Overlay Pro TT
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
        Overlay Pro TT is a powerful userscript for wplace.live that lets you overlay images on the collaborative canvas with pixel-perfect accuracy, advanced color matching, and flexible resize tools.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border shadow-sm bg-background/50 backdrop-blur-sm transition hover:shadow-md">
          <ImageDown className="h-8 w-8 text-primary" />
          <p className="text-sm">Overlay images above or behind tiles</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border shadow-sm bg-background/50 backdrop-blur-sm transition hover:shadow-md">
          <Palette className="h-8 w-8 text-primary" />
          <p className="text-sm">Match colors to the Wplace palette</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border shadow-sm bg-background/50 backdrop-blur-sm transition hover:shadow-md">
          <MoveDiagonal className="h-8 w-8 text-primary" />
          <p className="text-sm">Resize and reposition with ease</p>
        </div>
      </div>
      <a
        href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/releases/download/development/overlay-pro-tt.user.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="mt-4">Download Userscript</Button>
      </a>
      <a
        href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/tree/idea/rework"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 justify-center"
      >
        <Github className="h-4 w-4" /> View source on GitHub
      </a>
    </section>
  );
}
