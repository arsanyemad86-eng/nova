import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Playground from './pages/Playground'
import History from './pages/History'
import Pricing from './pages/Pricing'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className={isDark ? ' min-h-screen' : 'bg-white min-h-screen'}>
    <ParticlesBackground />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={
            <ProtectedRoute><Playground /></ProtectedRoute>
          } />
          <Route path="/history" element={
            <ProtectedRoute><History /></ProtectedRoute>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
    
  )
}

export default App