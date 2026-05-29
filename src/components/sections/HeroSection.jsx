import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-6">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-medium px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/10 mb-6"
        >
          AI Code Review
        </motion.span>
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
        >
          Review Your Code with <span className="text-cyan-400">AI Precision</span>
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Paste your code and get instant feedback on quality, bugs, and best practices — powered by AI.
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            to="/playground"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
          >
            Try it Free
          </Link>
          <Link
            to="/pricing"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 hover:border-gray-400 dark:border-white/10 dark:text-white dark:hover:border-white/30 transition-colors"
          >
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection