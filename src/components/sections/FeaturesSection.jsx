const features = [
  {
    icon: '⚡',
    title: 'Instant Analysis',
    description: 'Get detailed feedback on your code in seconds, not minutes.',
  },
  {
    icon: '🔍',
    title: 'Bug Detection',
    description: 'Automatically spot potential bugs and edge cases before they hit production.',
  },
  {
    icon: '📘',
    title: 'Best Practices',
    description: 'Learn industry-standard patterns and improve your code quality over time.',
  },
]

function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Use <span className="text-cyan-400">NOVA</span>?
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection