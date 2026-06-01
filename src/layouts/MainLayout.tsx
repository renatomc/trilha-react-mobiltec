import { NavLink, Outlet } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/github', label: 'GitHub API' },
  { to: '/metricas', label: 'Metricas' },
  { to: '/zustand-testes', label: 'Zustand Testes' },
  { to: '/repo-detail', label: 'Repo Detalhes' },
]

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside className="border-b border-white/10 bg-slate-900/70 p-6 backdrop-blur md:border-b-0 md:border-r">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Trilha React</p>
            <h1 className="mt-2 text-xl font-semibold">Navegacao com Layout</h1>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-sm transition',
                    isActive
                      ? 'bg-cyan-400 text-slate-900 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="relative overflow-x-hidden p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(14,116,144,0.18),_transparent_40%)]" />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
