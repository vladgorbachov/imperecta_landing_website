"use client"

import { Users, Clock, TrendingUp, CheckCircle } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Users",
      description: "Teams worldwide trust Imperecta"
    },
    {
      icon: Clock,
      value: "40%",
      label: "Time Saved",
      description: "Average productivity increase"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable platform performance"
    },
    {
      icon: CheckCircle,
      value: "50,000+",
      label: "Projects Completed",
      description: "Successful project deliveries"
    }
  ]

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Trusted by teams worldwide</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See the numbers that prove Imperecta's impact on team productivity and project success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-violet-500 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-violet-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <stat.icon className="h-8 w-8 text-violet-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-violet-400 mb-2">{stat.label}</div>
                <div className="text-slate-400 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg mb-6">
            Join thousands of satisfied customers who have transformed their project management
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-300 text-sm font-medium">TechCorp</div>
            <div className="text-slate-300 text-sm font-medium">StartupXYZ</div>
            <div className="text-slate-300 text-sm font-medium">DesignStudio</div>
            <div className="text-slate-300 text-sm font-medium">InnovationLab</div>
            <div className="text-slate-300 text-sm font-medium">GlobalTech</div>
            <div className="text-slate-300 text-sm font-medium">CreativeAgency</div>
          </div>
        </div>
      </div>
    </section>
  )
}
