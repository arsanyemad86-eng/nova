import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'

function History() {
  const [history, setHistory] = useState([])
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('nova_history') || '[]')
    setHistory(saved)
  }, [])

  const clearHistory = () => {
    localStorage.removeItem('nova_history')
    setHistory([])
  }

  const handleCopy = (entry) => {
    const text = `CODE:\n${entry.code}\n\nREVIEW:\n${entry.review}`
    navigator.clipboard.writeText(text)
    setCopiedId(entry.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleExportPDF = (entry) => {
  const doc = new jsPDF()
  doc.setFontSize(16)
  doc.text('NOVA Code Review', 20, 20)
  doc.setFontSize(10)
  doc.text(`Date: ${entry.date}`, 20, 35)
  doc.setFontSize(12)
  doc.text('CODE:', 20, 50)
  doc.setFontSize(9)
  const codeLines = doc.splitTextToSize(entry.code, 170)
  doc.text(codeLines, 20, 60)
  const reviewY = 60 + codeLines.length * 5 + 10
  doc.setFontSize(12)
  doc.text('REVIEW:', 20, reviewY)
  doc.setFontSize(9)
  const reviewLines = doc.splitTextToSize(entry.review, 170)
  doc.text(reviewLines, 20, reviewY + 10)
  doc.save(`nova-review-${entry.id}.pdf`)
}

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Review History</h1>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="px-4 py-2 rounded-lg border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors"
            >
              Clear History
            </button>
          )}
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Your past code reviews. ({history.length} reviews)</p>
        {history.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Go to the Playground to get started.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {history.map((entry) => (
              <div key={entry.id} className="p-6 rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                <div className="text-xs text-gray-500 mb-2">{entry.date}</div>
                <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono mb-4 whitespace-pre-wrap">{entry.code.slice(0, 200)}...</pre>
                <p className="text-sm text-gray-400 whitespace-pre-line">{entry.review}</p>
                <button
                  onClick={() => handleCopy(entry)}
                  className="mt-3 px-3 py-1 text-xs rounded border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-400 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-white/30 transition-colors"
                >
                  {copiedId === entry.id ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => handleExportPDF(entry)}
                  className="mt-3 ml-2 px-3 py-1 text-xs rounded border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  Export PDF
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default History

