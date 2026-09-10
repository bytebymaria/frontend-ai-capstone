import Link from "next/link";

const vibes = [
  {
    emoji: "🌧️",
    name: "Rainy Day",
    description: "Something warm, cozy, and comforting.",
  },
  {
    emoji: "📚",
    name: "Study Session",
    description: "Focus fuel for getting things done.",
  },
  {
    emoji: "🌷",
    name: "Soft & Dreamy",
    description: "Sweet, gentle, and a little dreamy.",
  },
  {
    emoji: "🎬",
    name: "Main Character",
    description: "A drink that deserves its own scene.",
  },
  {
    emoji: "🌙",
    name: "Late Night",
    description: "For slow evenings and quiet moments.",
  },
  {
    emoji: "⚡",
    name: "I Need Energy",
    description: "When you need a little extra kick.",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1 px-6 py-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-coffee">
          Main Character Café
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Coffee for whatever chapter you're in.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/70">
          Find a drink that matches your mood, your moment, and your main
          character energy.
        </p>

        <Link
          href="/vibe"
          className="mt-8 inline-flex rounded-full bg-coffee px-7 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Find Your Vibe →
        </Link>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-coffee">
            Pick your mood
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            What chapter are you in?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vibes.map((vibe) => (
            <Link
              key={vibe.name}
              href="/vibe"
              className="group rounded-3xl border border-coffee/10 bg-cream p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{vibe.emoji}</div>

              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {vibe.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-foreground/65">
                {vibe.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-coffee opacity-0 transition group-hover:opacity-100">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
