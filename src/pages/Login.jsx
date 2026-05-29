import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError('Please enter username and password')
      return
    }
    localStorage.setItem('nova_auth', 'true')
    navigate('/playground')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Sign in to access NOVA</p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white text-sm focus:outline-none focus:border-cyan-500/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white text-sm focus:outline-none focus:border-cyan-500/50"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login