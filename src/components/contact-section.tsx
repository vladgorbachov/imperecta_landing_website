"use client"

import { useState } from "react"
import { Mail, Phone, Globe, Send, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@delionsoft.com",
      link: "mailto:info@delionsoft.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+373 765 41 890 ",
      link: "tel:+373 765 41 890 "
    },
    {
      icon: Globe,
      title: "Website",
      value: "DeLion Software S.R.L",
      link: "https://www.delionsoft.com"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get in touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss how Imperecta can help your business tosucceed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? "_blank" : "_self"}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                      className="text-slate-300 hover:text-violet-400 transition-colors flex items-center space-x-2"
                    >
                      <span>{info.value}</span>
                      {info.link.startsWith('http') && <ExternalLink className="h-4 w-4" />}
                    </a>
                  </div>
                </div>
              ))}
            </div>

                        
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project management needs..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 text-lg font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 text-center">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
