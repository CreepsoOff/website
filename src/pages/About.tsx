export function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#934bc6] to-[#3e197b] text-transparent bg-clip-text">
        About
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
        I'm Fabian, a developer passionate about building useful tools and creative web experiences. This site will soon host a collection of my projects and professional work. In the meantime feel free to reach out through my social profiles.
      </p>
    </section>
  );
}
