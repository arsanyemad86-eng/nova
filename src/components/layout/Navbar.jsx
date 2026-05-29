import { Link, useNavigate } from 'react-router-dom'

function Navbar({ isDark, setIsDark }) {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('nova_auth')

  const handleLogout = () => {
    localStorage.removeItem('nova_auth')
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#111111]/90 backdrop-blur-md border-b border-[#1f1f1f]">
      <Link to="/" className="text-white font-bold text-xl tracking-widest">
        NOVA
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
        <Link to="/playground" className="text-muted hover:text-white transition-colors text-sm">Playground</Link>
        <Link to="/history" className="text-muted hover:text-white transition-colors text-sm">History</Link>
        <Link to="/pricing" className="text-muted hover:text-white transition-colors text-sm">Pricing</Link>
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-sm px-3 py-1 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
        {isAuth && (
          <button
            onClick={handleLogout}
            className="text-sm px-3 py-1 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar