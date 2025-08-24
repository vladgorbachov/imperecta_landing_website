import './index.css'
import Navbar from '@/components/navbar'
import StatsSection from '@/components/stats-section'
import IntegrationsSection from '@/components/integrations-section'
import FAQSection from '@/components/faq-section'
import TeamSection from '@/components/team-section'
import ContactSection from '@/components/contact-section'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import FeaturesPage from '@/pages/FeaturesPage'
import PricingPage from '@/pages/PricingPage'
import AboutPage from '@/pages/AboutPage'

export default function App() {
  const [isVideoPlaying] = useState(true)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)
  const [isLoopingTail, setIsLoopingTail] = useState(false)
  const LOOP_TAIL_SECONDS = 2.9
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      // Начинаем с самого начала для полного проигрывания при загрузке
      try {
        video.currentTime = 0
      } catch {}
      setIsLoopingTail(false)
    }

    const handleEnded = () => {
      // Когда полное видео закончилось — зацикливаем хвост
      const duration = Number.isFinite(video.duration) ? video.duration : 0
      const loopStart = Math.max(0, duration - LOOP_TAIL_SECONDS)
      try {
        video.currentTime = loopStart
        setIsLoopingTail(true)
        void video.play()
      } catch {}
    }

    const handleTimeUpdate = () => {
      if (!isLoopingTail) return
      const duration = Number.isFinite(video.duration) ? video.duration : 0
      if (duration <= 0) return
      const loopStart = Math.max(0, duration - LOOP_TAIL_SECONDS)
      // Когда доходим до конца — возвращаемся к началу хвоста
      if (video.currentTime >= duration - 0.05) {
        try {
          video.currentTime = loopStart
          void video.play()
        } catch {}
      }
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [isLoopingTail])

  const features = [
    { icon: () => null, title: '', description: '', color: '' },
  ]

  const techStack = [
    { name: 'React 18', description: 'Modern frontend framework' },
    { name: 'TypeScript', description: 'Type-safe development' },
    { name: 'Node.js', description: 'Scalable backend runtime' },
    { name: 'PostgreSQL', description: 'Reliable database' },
    { name: 'Drizzle ORM', description: 'Type-safe database queries' },
    { name: 'Tailwind CSS', description: 'Utility-first styling' },
  ]

  const testimonials = [
    { quote: 'Imperecta transformed...', author: 'Sarah Johnson', role: 'Product Manager at TechCorp', rating: 5 },
    { quote: 'The analytics and reporting...', author: 'Michael Chen', role: 'CTO at StartupXYZ', rating: 5 },
    { quote: 'Finally, a project management...', author: 'Emily Rodriguez', role: 'Team Lead at DesignStudio', rating: 5 },
  ]

  const pricingPlans = [
    { name: 'Starter', price: 'Free', description: 'Perfect for small teams getting started', features: ['Up to 5 team members', 'Basic project templates', 'Task management', 'File sharing (100MB)', 'Email support'], cta: 'Get Started Free', popular: false },
    { name: 'Professional', price: '$12', period: '/user/month', description: 'Ideal for growing teams and businesses', features: ['Up to 25 team members', 'Advanced project templates', 'Time tracking', 'Advanced analytics', 'API access', 'Priority support'], cta: 'Start Free Trial', popular: true },
    { name: 'Enterprise', price: 'Custom', description: 'For large organizations with specific needs', features: ['Unlimited team members', 'Custom integrations', 'Advanced security', 'Dedicated support', 'SLA guarantees', 'Custom training'], cta: 'Contact Sales', popular: false },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-geist">
      <Navbar />
      <Routes>
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={
          <>

      {/* Hero video only */}
      <section className="relative h-screen overflow-hidden pt-16">
        <video
          ref={heroVideoRef as React.RefObject<HTMLVideoElement>}
          className="video-background -translate-y-[20px]"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/hero_section.mp4" type="video/mp4" />
        </video>
      </section>

      

      {/* Stats */}
      <StatsSection />

      {/* Tech */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Built with modern technology</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Our tech stack ensures reliability, performance, and scalability.</p>
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

      {/* Integrations */}
      <IntegrationsSection />

      {/* Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What our customers say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Join thousands of satisfied teams already using Imperecta</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-lg mb-6 italic">"{t.quote}"</p>
                  <div className="text-white font-semibold">{t.author}</div>
                  <div className="text-slate-400 text-sm">{t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* ... можно добавить по мере необходимости ... */}

      {/* About */}
      {/* ... */}

      {/* Team */}
      <TeamSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA with background video */}
      <section className="relative py-24 overflow-hidden">
        <video className="video-background" autoPlay muted loop playsInline>
          <source src="/CTA_section.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to transform your project management?</h2>
          <p className="text-xl text-slate-200 mb-8">Join thousands of teams already using Imperecta</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

              <ContactSection />
          </>
        } />
      </Routes>
    </div>
  )
}
