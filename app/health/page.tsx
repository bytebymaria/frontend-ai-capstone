export default async function HealthPage() {
  const response = await fetch("http://localhost:3000/api/health", {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <main className="flex-1 px-6 py-16">
      <section className="mx-auto max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-coffee">
          System Status
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Health Check
        </h1>

        <div className="mt-8 rounded-3xl border border-coffee/10 bg-cream p-6">
          <p className="text-sm text-foreground/60">Status</p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {data.status}
          </p>

          <p className="mt-5 text-sm text-foreground/60">Service</p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {data.service}
          </p>

          <p className="mt-5 text-sm text-foreground/60">Timestamp</p>
          <p className="mt-1 text-sm text-foreground/80">
            {data.timestamp}
          </p>
        </div>
      </section>
    </main>
  );
}