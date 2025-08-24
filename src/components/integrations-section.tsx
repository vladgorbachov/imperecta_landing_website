"use client"

import { Zap, GitBranch, Database, Globe, Shield, Clock } from "lucide-react"

export default function IntegrationsSection() {
  const integrations = [
    {
      icon: GitBranch,
      title: "Git Integration",
      description: "Seamlessly integrate with Git repositories for version control and deployment workflows",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Database Support",
      description: "Compatible with PostgreSQL, MySQL, and other popular database systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Cloud Platforms",
      description: "Deploy on AWS, Google Cloud, Azure, or any cloud provider of your choice",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security Standards",
      description: "SOC 2, GDPR, and HIPAA compliant with enterprise-grade security features",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Real-time Sync",
      description: "Instant synchronization across all devices and team members",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "API Access",
      description: "Comprehensive REST API for custom integrations and automation",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="py-24 section-bg-integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Seamless integrations</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Imperecta works with your existing tools and infrastructure, making adoption effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-violet-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mb-6`}>
                <integration.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{integration.title}</h3>
              <p className="text-slate-200 leading-relaxed">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a custom integration?</h3>
            <p className="text-slate-200 mb-6">
              Our team can help you integrate Imperecta with your existing systems and workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Integration Team
              </button>
              <button className="border border-slate-400 text-white hover:bg-slate-700/60 px-6 py-3 rounded-lg font-semibold transition-colors">
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
