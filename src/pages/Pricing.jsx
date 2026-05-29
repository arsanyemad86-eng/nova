const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started.',
    features: ['5 reviews/month', 'Basic feedback', 'Community support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9',
    description: 'For serious developers.',
    features: ['Unlimited reviews', 'Detailed analysis', 'Priority support'],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$29',
    description: 'For teams and organizations.',
    features: ['Everything in Pro', 'Team dashboard', 'Dedicated support'],
    cta: 'Contact Us',
    highlight: false,
  },
]

function Pricing() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Simple Pricing</h1>
        <p className="text-gray-400 mb-12">Choose the plan that works for you.</p>
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-xl border flex flex-col ${
                plan.highlight
                  ? 'border-cyan-500/50 bg-cyan-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}<span className="text-sm text-gray-400">/mo</span></div>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <ul className="flex flex-col gap-2 mb-8 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-300">✓ {f}</li>
                ))}
              </ul>
              <button className={`mt-auto py-3 rounded-lg font-semibold transition-colors ${
                plan.highlight
                  ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                  : 'border border-white/10 text-white hover:border-white/30'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
