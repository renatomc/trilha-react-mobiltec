function HomePage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Home</p>
        <h2 className="text-3xl font-bold">Demo de React Router com Layout</h2>
        <p className="max-w-2xl text-slate-300">
          Esta tela e a entrada principal do sistema. O menu lateral permanece fixo e apenas o
          conteudo central muda com as rotas.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold">Conceito de Layout</h3>
          <p className="mt-2 text-sm text-slate-300">Sidebar e area de conteudo com Outlet.</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold">Rotas Simples</h3>
          <p className="mt-2 text-sm text-slate-300">Quatro paginas para explicar navegacao.</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
          <h3 className="font-semibold">Proximo Passo</h3>
          <p className="mt-2 text-sm text-slate-300">Base pronta para introduzir Redux depois.</p>
        </article>
      </div>
    </section>
  )
}

export default HomePage
