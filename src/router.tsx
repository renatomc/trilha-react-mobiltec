import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import GithubReposPage from './pages/GithubReposPage'
import MetricsPage from './pages/MetricsPage'
import ZustandTestes from './pages/ZustandTestes'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'github', element: <GithubReposPage /> },
      { path: 'metricas', element: <MetricsPage /> },
      { path: 'zustand-testes', element: <ZustandTestes /> },
    ],
  },
])
