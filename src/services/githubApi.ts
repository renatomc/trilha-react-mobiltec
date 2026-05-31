import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    ...(import.meta.env.VITE_GITHUB_TOKEN
      ? {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        }
      : {}),
  },
})

export default githubApi
