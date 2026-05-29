import { useState } from 'react'
import { analyzeCode } from '../utils/analyzeCode'

function Playground() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState('javascript')

const handleReview = () => {
  if (!code.trim()) return
  setIsLoading(true)
  setReview('')
  setTimeout(() => {
    const issues = analyzeCode(code, language)
    const result = issues.length > 0
      ? issues.join('\n\n')
      : '✅ No issues found. Code looks clean!'

    setReview(result)

    const entry = {
      id: Date.now(),
      code: code,
      review: result,
      date: new Date().toLocaleDateString()
    }
    const existing = JSON.parse(localStorage.getItem('nova_history') || '[]')
    localStorage.setItem('nova_history', JSON.stringify([entry, ...existing]))

    setIsLoading(false)
  }, 1500)
}

  return (
  <div className="min-h-screen pt-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Code Playground</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">Paste your code and get an instant AI review.</p>
      <div className="grid grid-cols-2 gap-6">
        {/* Left - Input */}
        <div className="flex flex-col gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-50 border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white text-sm focus:outline-none focus:border-cyan-500/50"
          >
            <option value="javascript" style={{backgroundColor: '#1a1a1a', color: '#fff'}}>JavaScript</option>
            <option value="python" style={{backgroundColor: '#1a1a1a', color: '#fff'}}>Python</option>
            <option value="typescript" style={{backgroundColor: '#1a1a1a', color: '#fff'}}>TypeScript</option>
          </select>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="w-full h-96 p-4 rounded-xl bg-gray-50 border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white font-mono text-sm resize-none focus:outline-none focus:border-cyan-500/50"
          />
          <button
            onClick={handleReview}
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            {isLoading ? 'Reviewing...' : 'Review Code'}
          </button>
        </div>
        {/* Right - Output */}
        <div className="h-96 p-4 rounded-xl bg-gray-50 border-gray-200 text-gray-500 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 text-sm whitespace-pre-line">
          {isLoading ? 'Analyzing your code...' : review ? review : 'Your AI review will appear here...'}
        </div>
      </div>
    </div>
  </div>


)
}


export default Playground