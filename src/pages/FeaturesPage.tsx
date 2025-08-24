export default function FeaturesPage() {
  return (
    <main className="pt-20 min-h-[80vh] section-bg-integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Features</h1>
        <p className="text-slate-200 mb-10 max-w-2xl">A quick preview of key capabilities. Content is placeholder and will be refined.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="bg-slate-800/70 backdrop-blur-sm border border-slate-600 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2">Feature {n}</h3>
              <p className="text-slate-300">Short description of what this feature does and why it matters.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


