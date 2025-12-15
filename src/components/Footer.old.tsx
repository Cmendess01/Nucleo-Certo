'use client'

import { Instagram, Linkedin, Facebook, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Coluna 1 - Sobre */}
          <div className="lg:col-span-4">
            <img 
              src={logoImage} 
              alt="Nucleo Core" 
              className="h-10 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-base text-gray-300 mb-6 max-w-xs leading-relaxed">
              15 anos transformando instituições de saúde através de gestão estratégica, qualidade e resultados mensuráveis.
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/quem-somos')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/solucoes')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Soluções & Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/metodologias')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Metodologias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/resultados')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/conteudos')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Conteúdos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contato')} 
                  className="text-sm text-gray-300 hover:text-[#C7A25B] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">WhatsApp</div>
                  <a 
                    href="https://wa.me/5562981859003" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-[#C7A25B] transition-colors"
                  >
                    (62) 98185-9003
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">E-mail</div>
                  <a 
                    href="mailto:contato@nucleocore.com.br"
                    className="text-sm text-white hover:text-[#C7A25B] transition-colors"
                  >
                    contato@nucleocore.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Horário</div>
                  <span className="text-sm text-white">Seg - Sex: 8h às 18h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white mb-6">Redes Sociais</h3>
            
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://www.instagram.com/nucleocore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C7A25B] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://br.linkedin.com/in/nucleo-core-gest%C3%A3o-hol%C3%ADstica-em-sa%C3%BAde-b174301b0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C7A25B] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/nucleocore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C7A25B] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C7A25B] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-white mb-1 font-medium">Goiânia, GO</div>
                <div className="text-xs text-gray-400">Atuação Nacional e Internacional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nucleo Core Gestão Holística em Saúde. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button 
                onClick={() => handleNavigation('/politica-privacidade')}
                className="hover:text-[#C7A25B] transition-colors"
              >
                Política de Privacidade
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleNavigation('/termos-uso')}
                className="hover:text-[#C7A25B] transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
          
          {/* Desenvolvido por Tec Capital */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Desenvolvido por{' '}
              <a
                href="https://tec.capital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7A25B] hover:text-[#A98845] transition-colors font-medium"
              >
                Tec Capital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}