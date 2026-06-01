import { create } from 'zustand'
import type { GithubRepository } from '../services/githubRepositories'

type SelectedRepoState = {
  selectedRepo: GithubRepository | null
  selectRepo: (repo: GithubRepository) => void
  clearRepo: () => void
}

export const useSelectedRepoStore = create<SelectedRepoState>((set) => ({
  selectedRepo: null,
  selectRepo: (repo) => set({ selectedRepo: repo }),
  clearRepo: () => set({ selectedRepo: null }),
}))
