import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NAV_LINKS = [
  {
    to: '/',
    label: 'Home',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    to: '/playground',
    label: 'Playground',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    to: '/history',
    label: 'History',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    to: '/pricing',
    label: 'Pricing',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
]

function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuth = localStorage.getItem('nova_auth')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('nova_auth')
    navigate('/login')
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
          <Link to="/" className="text-gray-900 dark:text-white font-bold text-xl tracking-widest">
            NOVA
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className={`text-sm transition-colors ${location.pathname === to ? 'text-cyan-400' : 'text-gray-500 dark:text-gray-400 hover:text-white'}`}>
                {label}
              </Link>
            ))}
            {isAuth ? (
              <button onClick={handleLogout} className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">Logout</button>
            ) : (
              <Link to="/login" className="text-sm px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors">Login</Link>
            )}
            <button onClick={() => setIsDark(!isDark)} className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={() => setIsDark(!isDark)} className="text-sm px-2 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400">
              {isDark ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMenuOpen(true)} className="text-gray-900 dark:text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
        style={{
          width: 260,
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(16px)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-white font-bold text-lg tracking-widest">NOVA</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-3 flex-1">
          <p className="text-xs font-bold tracking-widest text-white/30 uppercase px-3 mb-2">Navigation</p>
          {NAV_LINKS.map(({ to, label, icon }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-sm font-medium transition-all"
                style={{
                  background: active ? 'rgba(6,182,212,0.1)' : 'transparent',
                  border: active ? '1px solid rgba(6,182,212,0.2)' : '1px solid transparent',
                  color: active ? '#06b6d4' : 'rgba(255,255,255,0.75)',
                }}
              >
                <span style={{ opacity: active ? 1 : 0.6, color: active ? '#06b6d4' : 'inherit' }}>{icon}</span>
                {label}
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </Link>
            )
          })}

          {/* Auth */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs font-bold tracking-widest text-white/30 uppercase px-3 mb-2">Account</p>
            {isAuth ? (
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-red-400"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-[#0a0a0a]"
                style={{ background: '#06b6d4' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-white/10">
          <span className="text-xs text-white/30">NOVA © 2026</span>
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 text-gray-400"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar