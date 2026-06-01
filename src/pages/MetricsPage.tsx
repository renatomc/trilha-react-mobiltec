const metrics = [
  { label: 'Usuarios ativos', value: '1.284' },
  { label: 'Acessos hoje', value: '8.931' },
  { label: 'Taxa de conversao', value: '7.4%' },
]

function MetricsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Tela 3</p>
        <h2 className="text-3xl font-bold">Painel de Metricas</h2>
        <p className="text-slate-300">Exemplo de tela simples para explicar troca de rota.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
          >
            <p className="text-sm text-slate-300">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-300">{metric.value}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MetricsPage
