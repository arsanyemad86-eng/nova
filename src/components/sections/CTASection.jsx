import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Write <span className="text-cyan-400">Better Code</span>?
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Join developers who use NOVA to ship cleaner, faster, and more reliable code.
        </p>
        <Link
          to="/playground"
          className="mt-6 inline-block px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
        >
          Start Reviewing Now
        </Link>
      </div>
    </section>
  )
}

export default CTASection