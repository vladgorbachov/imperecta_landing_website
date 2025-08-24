"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink } from "lucide-react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Left) */}
          <div className="flex items-center space-x-4 pl-4 sm:pl-6 lg:pl-8">
            <img src="/images/imperecta-logo.png" alt="Imperecta Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold logo-text">IMPERECTA</span>
          </div>

          {/* Right side (Links + Button + Mobile trigger) */}
          <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
            {/* Desktop Navigation (Right) */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#features" 
                className="text-slate-300 hover:text-white transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-slate-300 hover:text-white transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-slate-300 hover:text-white transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="https://www.delionsoft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                <span>DeLion Software</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#contact">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white transition-all duration-200">
                  Contact Us
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button (Right) */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 border border-slate-600">
              <a
                href="#features"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="https://www.delionsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200 flex items-center justify-between"
                onClick={closeMobileMenu}
              >
                <span>DeLion Software</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <div className="px-3 py-2">
                <a href="#contact">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
