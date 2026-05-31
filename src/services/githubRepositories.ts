import githubApi from './githubApi'

export type GithubRepository = {
  id: number
  name: string
  html_url: string
  description: string | null
}

export async function getGithubRepositories(username: string): Promise<GithubRepository[]> {
  const response = await githubApi.get<GithubRepository[]>(
    `/users/${encodeURIComponent(username)}/repos`,
    {
      params: {
        sort: 'updated',
        per_page: 10,
      },
    },
  )

  return response.data
}
