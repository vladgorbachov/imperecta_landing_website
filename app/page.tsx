"use client"

import { ArrowRight, Users, Zap, Shield, Star, CheckCircle, BarChart3, Calendar, Target, GitBranch, Database, Lock, Globe, Clock, TrendingUp, MessageSquare, FileText, Settings, Play, Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Navbar from "@/components/navbar"
import StatsSection from "@/components/stats-section"
import IntegrationsSection from "@/components/integrations-section"
import FAQSection from "@/components/faq-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools that keep your team connected, productive, and aligned on project goals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automate repetitive tasks and streamline workflows to focus on what matters most for your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption, compliance standards, and data protection you can trust",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights to track progress, identify bottlenecks, and optimize performance",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent task scheduling and resource allocation to maximize team efficiency and meet deadlines",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set clear objectives, track milestones, and measure success with our comprehensive goal management system",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const techStack = [
    { name: "React 18", description: "Modern frontend framework" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Node.js", description: "Scalable backend runtime" },
    { name: "PostgreSQL", description: "Reliable database" },
    { name: "Drizzle ORM", description: "Type-safe database queries" },
    { name: "Tailwind CSS", description: "Utility-first styling" }
  ]

  const testimonials = [
    {
      quote: "Imperecta transformed how our team manages projects. The intuitive interface and powerful automation features saved us countless hours.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      rating: 5
    },
    {
      quote: "The analytics and reporting capabilities give us unprecedented visibility into our project performance. Highly recommended!",
      author: "Michael Chen",
      role: "CTO at StartupXYZ",
      rating: 5
    },
    {
      quote: "Finally, a project management tool that actually makes sense. Our team adoption was 100% within the first week.",
      author: "Emily Rodriguez",
      role: "Team Lead at DesignStudio",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Basic project templates",
        "Task management",
        "File sharing (100MB)",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "/user/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to 25 team members",
        "Advanced project templates",
        "Time tracking",
        "Advanced analytics",
        "API access",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "SLA guarantees",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-geist">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden pt-16">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src="/hero_section.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-lg mb-6">Trusted by teams worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-slate-300 text-sm">TechCorp</div>
              <div className="text-slate-300 text-sm">StartupXYZ</div>
              <div className="text-slate-300 text-sm">DesignStudio</div>
              <div className="text-slate-300 text-sm">InnovationLab</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Everything you need to succeed</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-violet-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <feature.icon className="h-8 w-8 text-white" />
                </div>
                  <CardTitle className="text-white text-xl mb-4">{feature.title}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Technical Excellence Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Built with modern technology</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our tech stack ensures reliability, performance, and scalability for your business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 hover:border-violet-500 transition-all duration-300">
                  <div className="text-violet-400 text-2xl font-bold mb-2">{tech.name}</div>
                  <div className="text-slate-400 text-sm">{tech.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What our customers say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of satisfied teams already using Imperecta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                </div>
                  <p className="text-slate-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Simple, transparent pricing</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-slate-700 border-slate-600 relative ${plan.popular ? 'border-violet-500 ring-2 ring-violet-500/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-slate-400">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-slate-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-violet-600 hover:bg-violet-700' : 'bg-slate-600 hover:bg-slate-500'}`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">About Imperecta</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Imperecta is a modern project management platform designed to help teams collaborate effectively, 
                track progress efficiently, and deliver exceptional results. Built with cutting-edge technology 
                and user experience in mind.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our platform combines powerful project management tools with intuitive design, making it easy 
                for teams of any size to get started and scale as they grow.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-violet-600 hover:bg-violet-700">
                  Learn More
                </Button>
                <Button variant="outline" className="border-slate-400 text-white hover:bg-slate-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
              <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-slate-300">Increased team productivity by 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-slate-300">Reduced project delivery time by 30%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-slate-300">Improved team collaboration and communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-slate-300">Real-time insights and analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src="/CTA_section.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to transform your project management?</h2>
          <p className="text-xl text-slate-200 mb-8">
            Join thousands of teams already using Imperecta to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/images/imperecta-logo.png" alt="Imperecta Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold logo-text">IMPERECTA</span>
              </div>
              <p className="text-gray-400 max-w-md mb-4">
                Modern project management solutions that empower teams to deliver exceptional results.
                Built with cutting-edge technology and designed for the modern workplace.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://www.delionsoft.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
                <span className="text-slate-500">Powered by DeLion Software</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://www.delionsoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    DeLion Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 Imperecta. All rights reserved. | Powered by DeLion Software
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
