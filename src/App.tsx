function App() {
  return (
    <main className="min-h-screen px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-3 border-b border-white/10 pb-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-300">
            Weather Dashboard
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                City weather intelligence
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Search a city, compare current conditions, and review the next
                week of weather in a responsive dashboard interface.
              </p>
            </div>

            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-950/20">
              Open-Meteo powered forecast data
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/30">
            <p className="text-sm font-medium text-slate-400">Search</p>
            <div className="mt-4 rounded-md border border-dashed border-slate-700 bg-slate-900/70 p-6 text-slate-300">
              City search will live here.
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/30">
            <p className="text-sm font-medium text-slate-400">
              Current conditions
            </p>
            <div className="mt-4 rounded-md border border-dashed border-slate-700 bg-slate-900/70 p-6 text-slate-300">
              Current weather card will live here.
            </div>
          </aside>
        </section>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/30">
            <p className="text-sm font-medium text-slate-400">
              24-hour forecast
            </p>
            <div className="mt-4 min-h-64 rounded-md border border-dashed border-slate-700 bg-slate-900/70 p-6 text-slate-300">
              Forecast chart will live here.
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/30">
            <p className="text-sm font-medium text-slate-400">
              Recent cities
            </p>
            <div className="mt-4 rounded-md border border-dashed border-slate-700 bg-slate-900/70 p-6 text-slate-300">
              Recent city shortcuts will live here.
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/30">
          <p className="text-sm font-medium text-slate-400">7-day forecast</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {Array.from({ length: 7 }, (_, index) => (
              <div
                className="rounded-md border border-dashed border-slate-700 bg-slate-900/70 p-4 text-sm text-slate-300"
                key={index}
              >
                Day {index + 1}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App