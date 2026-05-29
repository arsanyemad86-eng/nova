import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('nova_auth')

  const handleLogout = () => {
    localStorage.removeItem('nova_auth')
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <Link to="/" className="text-gray-900 dark:text-white font-bold text-xl tracking-widest shrink-0">
        NOVA
      </Link>
      <div className="flex items-center gap-3 overflow-x-auto">
        <Link to="/" className="text-muted hover:text-white transition-colors text-sm shrink-0">Home</Link>
        <Link to="/playground" className="text-muted hover:text-white transition-colors text-sm shrink-0">Playground</Link>
        <Link to="/history" className="text-muted hover:text-white transition-colors text-sm shrink-0">History</Link>
        <Link to="/pricing" className="text-muted hover:text-white transition-colors text-sm shrink-0">Pricing</Link>
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 transition-colors shrink-0"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        {isAuth && (
          <button
            onClick={handleLogout}
            className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors shrink-0"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar