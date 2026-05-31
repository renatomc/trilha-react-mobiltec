import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useGithubRepositories } from './hooks/useGithubRepositories'

function App() {
  const [username, setUsername] = useState('facebook')
  const { data: repositories = [], isLoading, isError } = useGithubRepositories(username)

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  return (
    <main>
      <h1>Buscar repositorios no GitHub</h1>

      <label htmlFor="github-username">Usuario do GitHub</label>
      <input
        id="github-username"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Digite um usuario"
      />

      {isLoading && <p>Carregando repositorios...</p>}
      {isError && <p>Nao foi possivel carregar os repositorios desse usuario.</p>}

      {!isLoading && !isError && (
        <ul>
          {repositories.map((repository) => (
            <li key={repository.id}>
              <a href={repository.html_url} target="_blank" rel="noreferrer">
                {repository.name}
              </a>
              {repository.description && <p>{repository.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
