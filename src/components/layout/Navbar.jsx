import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('nova_auth')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('nova_auth')
    navigate('/login')
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-gray-900 dark:text-white font-bold text-xl tracking-widest">
          NOVA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <Link to="/playground" className="text-muted hover:text-white transition-colors text-sm">Playground</Link>
          <Link to="/history" className="text-muted hover:text-white transition-colors text-sm">History</Link>
          <Link to="/pricing" className="text-muted hover:text-white transition-colors text-sm">Pricing</Link>
          {isAuth ? (
            <button onClick={handleLogout} className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">Logout</button>
          ) : (
            <Link to="/login" className="text-sm px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors">Login</Link>
          )}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Mobile — dark mode + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm px-2 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 dark:text-white text-2xl w-8 h-8 flex items-center justify-center"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu — smooth */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-end gap-4 px-6 pb-4 bg-white/5">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Home</Link>
          <Link to="/playground" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Playground</Link>
          <Link to="/history" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">History</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Pricing</Link>
          {isAuth ? (
            <button onClick={handleLogout} className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400">Logout</button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className="text-sm px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-400">Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar