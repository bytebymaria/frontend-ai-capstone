const vibes = [
  {
    emoji: "🌧️",
    name: "Rainy Day",
    description: "Warm, cozy, and comforting.",
  },
  {
    emoji: "📚",
    name: "Study Session",
    description: "Focus fuel for getting things done.",
  },
  {
    emoji: "🌷",
    name: "Soft & Dreamy",
    description: "Sweet, gentle, and dreamy.",
  },
  {
    emoji: "🎬",
    name: "Main Character",
    description: "A drink that deserves its own scene.",
  },
  {
    emoji: "🌙",
    name: "Late Night",
    description: "For quiet evenings and slow moments.",
  },
  {
    emoji: "⚡",
    name: "I Need Energy",
    description: "When you need a little extra kick.",
  },
];

export default function VibePage() {
  return (
    <main className="flex-1 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-coffee">
            Find Your Vibe
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What's your current chapter?
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-foreground/65">
            Pick the mood that feels most like you right now, and we'll find
            your café match.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vibes.map((vibe) => (
            <button
              key={vibe.name}
              type="button"
              className="group rounded-3xl border border-coffee/10 bg-cream p-7 text-left transition hover:-translate-y-1 hover:border-coffee/25 hover:shadow-lg"
            >
              <div className="text-4xl">{vibe.emoji}</div>

              <h2 className="mt-5 text-xl font-semibold text-foreground">
                {vibe.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-foreground/65">
                {vibe.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-coffee opacity-0 transition group-hover:opacity-100">
                Choose this vibe →
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}