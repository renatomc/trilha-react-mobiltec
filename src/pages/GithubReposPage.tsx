import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useGithubRepositories } from '../hooks/useGithubRepositories'

function GithubReposPage() {
  const [username, setUsername] = useState('facebook')
  const { data: repositories = [], isLoading, isError } = useGithubRepositories(username)

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Integracao</p>
        <h2 className="text-3xl font-bold">Repositorios do GitHub</h2>
      </header>

      <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
        <label htmlFor="github-username" className="mb-2 block text-sm font-medium text-slate-200">
          Usuario do GitHub
        </label>
        <input
          id="github-username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Digite um usuario"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-400 transition focus:ring-2"
        />
      </div>

      {isLoading && <p className="text-slate-300">Carregando repositorios...</p>}
      {isError && (
        <p className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-red-200">
          Nao foi possivel carregar os repositorios desse usuario.
        </p>
      )}

      {!isLoading && !isError && (
        <ul className="grid gap-3">
          {repositories.map((repository) => (
            <li
              key={repository.id}
              className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
            >
              <a
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-300 hover:underline"
              >
                {repository.name}
              </a>
              {repository.description && (
                <p className="mt-2 text-sm text-slate-300">{repository.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default GithubReposPage
