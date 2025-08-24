export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: 'Free', features: ['Up to 5 users', 'Basic features'] },
    { name: 'Pro', price: '$12/user/mo', features: ['Up to 25 users', 'Advanced features'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited users', 'Dedicated support'] },
  ]
  return (
    <main className="pt-20 min-h-[80vh] section-bg-trusted-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Pricing</h1>
        <p className="text-slate-200 mb-10 max-w-2xl">Transparent plans. Placeholder content.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="bg-slate-800/70 backdrop-blur-sm border border-slate-600 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">{p.name}</h3>
              <div className="text-violet-400 text-xl mb-4">{p.price}</div>
              <ul className="text-slate-300 list-disc list-inside space-y-1">
                {p.features.map(f => (<li key={f}>{f}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


