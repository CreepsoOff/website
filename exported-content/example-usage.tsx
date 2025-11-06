import { ParticlesBackground } from '@/components/ParticlesBackground';

export function ExamplePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <ParticlesBackground />
      
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#934bc6] to-[#3e197b] text-transparent bg-clip-text">
            Your Site
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground">
          This is an example page with the animated particles background.
        </p>
      </div>
    </main>
  );
}
