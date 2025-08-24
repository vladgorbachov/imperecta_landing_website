"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What makes Imperecta different from other project management tools?",
      answer: "Imperecta stands out with its modern tech stack (React 18, Node.js, PostgreSQL), intuitive user interface, and powerful automation features. We focus on developer experience and team collaboration, offering enterprise-grade security with a user-friendly design that teams actually want to use."
    },
    {
      question: "Can I integrate Imperecta with my existing tools and workflows?",
      answer: "Absolutely! Imperecta offers comprehensive API access and supports integrations with popular development tools, Git repositories, cloud platforms, and databases. Our team can also help create custom integrations for your specific needs."
    },
    {
      question: "Is Imperecta suitable for both small teams and large enterprises?",
      answer: "Yes, Imperecta scales from small teams to large enterprises. Our Starter plan is perfect for small teams getting started, while our Professional and Enterprise plans offer advanced features, unlimited team members, and dedicated support for larger organizations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support tiers: email support for Starter users, priority support for Professional users, and dedicated support with SLA guarantees for Enterprise customers. We also provide comprehensive documentation, video tutorials, and a knowledge base."
    },
    {
      question: "How secure is my data on Imperecta?",
      answer: "Security is our top priority. Imperecta features enterprise-grade encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is encrypted in transit and at rest, with role-based access controls and audit logging."
    },
    {
      question: "Can I try Imperecta before committing to a paid plan?",
      answer: "Yes! We offer a free Starter plan with generous limits, and all paid plans include a 14-day free trial. This gives you plenty of time to explore all features and see how Imperecta fits your team's workflow."
    },
    {
      question: "What happens if I need to cancel my subscription?",
      answer: "You can cancel your subscription at any time with no penalties. Your data remains accessible for 30 days after cancellation, and you can export all your project data in standard formats. We believe in making it easy to leave if we're not the right fit."
    },
    {
      question: "Does Imperecta support mobile devices?",
      answer: "Yes! Imperecta is fully responsive and works great on mobile devices. Our web app is optimized for all screen sizes, and we're working on native mobile apps for iOS and Android to be released later this year."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get answers to the most common questions about Imperecta
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-violet-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-violet-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-slate-600">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border border-slate-400 text-white hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
