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

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <Link to="/playground" className="text-muted hover:text-white transition-colors text-sm">Playground</Link>
          <Link to="/history" className="text-muted hover:text-white transition-colors text-sm">History</Link>
          <Link to="/pricing" className="text-muted hover:text-white transition-colors text-sm">Pricing</Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          {isAuth && (
            <button onClick={handleLogout} className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">
              Logout
            </button>
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 dark:text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white/10 backdrop-blur-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Home</Link>
          <Link to="/playground" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Playground</Link>
          <Link to="/history" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">History</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white text-sm">Pricing</Link>
          <button
            onClick={() => { setIsDark(!isDark); setMenuOpen(false) }}
            className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400 w-fit"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          {isAuth && (
            <button onClick={handleLogout} className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 w-fit">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar