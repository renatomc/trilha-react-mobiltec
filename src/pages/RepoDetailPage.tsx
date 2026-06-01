import { useNavigate } from 'react-router-dom'
import { useSelectedRepoStore } from '../stores/selectedRepoStore'

function RepoDetailPage() {
  const navigate = useNavigate()
  const { selectedRepo, clearRepo } = useSelectedRepoStore()

  if (!selectedRepo) {
    return (
      <section className="space-y-4">
        <p className="text-slate-400">Nenhum repositorio selecionado.</p>
        <button
          onClick={() => navigate('/github')}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400"
        >
          Voltar para a lista
        </button>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Zustand</p>
        <h2 className="text-3xl font-bold">Detalhes do Repositorio</h2>
        <p className="text-slate-400 text-sm">
          Estes dados vieram do store do Zustand — nao foram buscados novamente da API.
        </p>
      </header>

      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Nome</p>
          <p className="mt-1 text-xl font-semibold text-cyan-300">{selectedRepo.name}</p>
        </div>

        {selectedRepo.description && (
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Descricao</p>
            <p className="mt-1 text-slate-200">{selectedRepo.description}</p>
          </div>
        )}

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">ID no GitHub</p>
          <p className="mt-1 font-mono text-slate-300">{selectedRepo.id}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">URL</p>
          <a
            href={selectedRepo.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block break-all text-sm text-cyan-400 hover:underline"
          >
            {selectedRepo.html_url}
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
        <p className="text-xs uppercase tracking-widest text-yellow-300">Prova de persistencia</p>
        <p className="mt-2 text-sm text-slate-300">
          Navegue para outra pagina e volte aqui. Os dados acima continuam presentes no Zustand
          enquanto a aba estiver aberta.
        </p>
        <p className="mt-2 font-mono text-xs text-slate-400">
          useSelectedRepoStore.getState().selectedRepo.name === &quot;{selectedRepo.name}&quot;
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate('/github')}
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
        >
          Voltar para a lista
        </button>
        <button
          onClick={() => {
            clearRepo()
            navigate('/github')
          }}
          className="rounded-lg bg-red-500/20 border border-red-400/30 px-4 py-2 text-sm text-red-300 hover:bg-red-500/30"
        >
          Limpar store e voltar
        </button>
      </div>
    </section>
  )
}

export default RepoDetailPage
