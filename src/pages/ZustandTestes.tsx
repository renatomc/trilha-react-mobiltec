const nextTopics = ['State global para usuario logado']

function ZustandTestes() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Tela 4</p>
        <h2 className="text-3xl font-bold">Preparacao para Redux</h2>
        <p className="max-w-2xl text-slate-300">
          Esta tela deixa claro quais pontos serao migrados para estado global na proxima etapa da
          agenda.
        </p>
      </header>

      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <ul className="space-y-3">
          {nextTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-slate-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ZustandTestes
