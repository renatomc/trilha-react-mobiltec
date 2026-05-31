import { useQuery } from '@tanstack/react-query'
import { getGithubRepositories } from '../services/githubRepositories'

export function useGithubRepositories(username: string) {
  const normalizedUsername = username.trim()

  return useQuery({
    queryKey: ['github-repositories', normalizedUsername],
    queryFn: () => getGithubRepositories(normalizedUsername),
    enabled: normalizedUsername.length > 0,
  })
}
