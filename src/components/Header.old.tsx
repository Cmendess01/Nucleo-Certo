'use client'

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
interface HeaderProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início', path: '/' },
    { id: 'about', label: 'Quem Somos', path: '/quem-somos' },
    { id: 'solutions', label: 'Soluções', path: '/solucoes' },
    { id: 'methodologies', label: 'Metodologias', path: '/metodologias' },
    { id: 'results', label: 'Resultados', path: '/resultados' },
    { id: 'content', label: 'Conteúdos', path: '/conteudos' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex-shrink-0 transition-opacity hover:opacity-80"
          >
            <img src={logoImage} alt="Nucleo Core" className="h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  currentPage === item.id
                    ? 'text-[#C7A25B] bg-[#C7A25B]/10'
                    : 'text-gray-700 hover:text-[#C7A25B] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavigation('/contato')}
              className="px-6 py-3 bg-[#C7A25B] text-white text-sm font-medium rounded-lg hover:bg-[#A98845] transition-all"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#C7A25B] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-[#C7A25B]/10 text-[#C7A25B] font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNavigation('/contato')}
                className="w-full px-4 py-3 text-center bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}