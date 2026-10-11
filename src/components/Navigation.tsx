'use client'

import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setIsMenuOpen(false)

      // Update active section based on scroll position
      const navHeight = 80
      const current = navItems.find(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= navHeight + 20 && rect.bottom >= navHeight + 20
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    setIsMenuOpen(false)
    if (element) {
      const navHeight = 80 // Approximate height of the navigation bar
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border-color'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="flex items-center justify-between max-w-6xl w-full px-4">
          {/* Logo */}
          <Logo onClick={() => scrollToSection('hero')} />
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-base transition-colors duration-300 hover:text-primary-blue px-6 py-3 rounded-lg ${
                  activeSection === item.id
                    ? 'text-primary-blue bg-primary-blue/10'
                    : 'text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(open => !open)}
            className="md:hidden text-primary-blue p-3 rounded-lg hover:bg-primary-blue/10 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-border-color bg-background/95 px-4 py-2 backdrop-blur-md`}
      >
        <div className="mx-auto flex max-w-6xl flex-col">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-lg px-4 py-3 text-left font-mono transition-colors ${
                activeSection === item.id
                  ? 'bg-primary-blue/10 text-primary-blue'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-primary-blue'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
