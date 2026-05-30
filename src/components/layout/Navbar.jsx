{/* Drawer من اليمين */}
<div className={`fixed top-0 right-0 h-full w-64 z-50 bg-white/10 backdrop-blur-md border-l border-white/10 flex flex-col px-6 pt-6 pb-8 transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  
  {/* Header الـ drawer */}
  <div className="flex items-center justify-between mb-8">
    <span className="text-white font-bold text-lg tracking-widest">Menu</span>
    <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-xl">✕</button>
  </div>

  <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-3 border-b border-white/10">
    <span>🏠</span> Home
  </Link>
  <Link to="/playground" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-3 border-b border-white/10">
    <span>⚡</span> Playground
  </Link>
  <Link to="/history" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-3 border-b border-white/10">
    <span>📋</span> History
  </Link>
  <Link to="/pricing" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-3 border-b border-white/10">
    <span>💎</span> Pricing
  </Link>

  <div className="mt-6">
    {isAuth ? (
      <button onClick={handleLogout} className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg border border-red-500/30 text-red-400 w-full">
        <span>🚪</span> Logout
      </button>
    ) : (
      <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-sm px-3 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 w-full">
        <span>🔑</span> Login
      </Link>
    )}
  </div>
</div>