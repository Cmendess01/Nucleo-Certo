'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Quem Somos', path: '/quem-somos' },
    { label: 'Soluções', path: '/solucoes' },
    { label: 'Metodologias', path: '/metodologia' },
    { label: 'Resultados', path: '/resultados' },
    { label: 'Conteúdos', path: '/conteudos' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
            <img src="/assets/1f404d50844828d5bec32af7f6daa3817ba7bd98.png" alt="Nucleo Core" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  pathname === item.path
                    ? 'text-[#C7A25B] bg-[#C7A25B]/10'
                    : 'text-gray-700 hover:text-[#C7A25B] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contato"
              className="px-6 py-3 bg-[#C7A25B] text-white text-sm font-medium rounded-lg hover:bg-[#A98845] transition-all"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#C7A25B] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  pathname === item.path
                    ? 'bg-[#C7A25B]/10 text-[#C7A25B] font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}