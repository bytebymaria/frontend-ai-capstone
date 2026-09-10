import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-coffee/10 bg-cream px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-center text-xl font-semibold tracking-tight text-coffee sm:text-left"
        >
          Main Character Café
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-foreground sm:justify-end sm:gap-6">
          <Link href="/menu" className="transition hover:text-coffee">
            Menu
          </Link>

          <Link href="/vibe" className="transition hover:text-coffee">
            Find Your Vibe
          </Link>

          <Link href="/story" className="transition hover:text-coffee">
            Our Story
          </Link>

          <Link href="/journal" className="transition hover:text-coffee">
            Journal
          </Link>

          <Link href="/locations" className="transition hover:text-coffee">
            Locations
          </Link>

          <Link href="/favorites" className="transition hover:text-coffee">
            ♡ Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
