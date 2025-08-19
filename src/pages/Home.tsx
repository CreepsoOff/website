export function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-6xl font-bold">Fabian</h1>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to my{' '}
          <span className="bg-gradient-to-r from-[#934bc6] to-[#3e197b] text-transparent bg-clip-text">
            Portfolio
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Coming soon... Stay tuned for an amazing showcase of my work and experiences.
        </p>
      </div>
    </main>
  );
}
