"use client"

import { Github, Linkedin, Globe, Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Vlad Gorbachov",
      role: "Lead Developer & Founder",
      description: "Full-stack developer with expertise in React, Node.js, and modern web technologies. Passionate about creating intuitive and powerful project management solutions.",
      avatar: "/images/profiles/vlad-gorbachov.jpg",
      github: "https://github.com/vladgorbachov",
      linkedin: "https://linkedin.com/in/vladgorbachov",
      website: "https://www.delionsoft.com"
    },
    {
      name: "DeLion Software Team",
      role: "Development & Design",
      description: "Our talented team of developers, designers, and product specialists working together to build the future of project management.",
      avatar: "/images/profiles/team.jpg",
      website: "https://www.delionsoft.com",
      email: "contact@delionsoft.com"
    }
  ]

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Meet the team behind Imperecta</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Built with passion and expertise by the talented developers at DeLion Software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-violet-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.avatar ? (
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      member.name.charAt(0)
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-violet-400 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-300 leading-relaxed mb-4">{member.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    {member.github && (
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-violet-400 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-violet-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.website && (
                      <a 
                        href={member.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-violet-400 transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-slate-400 hover:text-violet-400 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join our team</h3>
            <p className="text-slate-300 mb-6">
              We're always looking for talented developers, designers, and product specialists to join our mission
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.delionsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Visit DeLion Software
              </a>
              <button className="border border-slate-400 text-white hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
