import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('light')
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return router.pathname === path
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md shadow-lg' : ''
    }`} style={{ 
      backgroundColor: 'var(--nav-bg)',
      borderBottom: '1px solid var(--nav-border)'
    }}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-lift" onClick={closeMenu}>
            <div className="relative w-8 h-8">
              <Image
                src="/images/LogoVD.png"
                alt="Vogelsang Designs"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-lg font-bold text-gradient">Vogelsang Designs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
              aria-label="Toggle theme"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
              aria-label="Toggle theme"
            />
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t" style={{ borderColor: 'var(--nav-border)' }}>
            <Link 
              href="/" 
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                isActive('/') ? 'active' : 'nav-link'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                isActive('/about') ? 'active' : 'nav-link'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                isActive('/projects') ? 'active' : 'nav-link'
              }`}
              onClick={closeMenu}
            >
              Work
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                isActive('/contact') ? 'active' : 'nav-link'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
