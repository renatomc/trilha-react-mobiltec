import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import githubApi from './services/githubApi'

function App() {
  const [username, setUsername] = useState('facebook')
  const [repositories, setRepositories] = useState<GithubRepository[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const normalizedUsername = username.trim()

    if (!normalizedUsername) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRepositories([])
      setErrorMessage('')
      return
    }

    let ignore = false

    async function fetchRepositories() {
      setIsLoading(true)
      setErrorMessage('')

      try {
        const response = await githubApi.get<GithubRepository[]>(
          `/users/${encodeURIComponent(normalizedUsername)}/repos`,
          {
            params: {
              sort: 'updated',
              per_page: 10,
            },
          },
        )

        if (!ignore) {
          setRepositories(response.data)
        }
      } catch {
        if (!ignore) {
          setRepositories([])
          setErrorMessage('Nao foi possivel carregar os repositorios desse usuario.')
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    fetchRepositories()

    return () => {
      ignore = true
    }
  }, [username])

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
      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && (
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

type GithubRepository = {
  id: number
  name: string
  html_url: string
  description: string | null
}

export default App
