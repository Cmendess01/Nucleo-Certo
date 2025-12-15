'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Núcleo <span className="text-[#C7A25B]">Core</span>
            </h3>
            <p className="text-[#E5E7EB] leading-relaxed mb-6">
              15 anos transformando a gestão em saúde com metodologias proprietárias e resultados mensuráveis.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C7A25B] transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C7A25B] transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/quem-somos" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/metodologias" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                  Metodologias
                </Link>
              </li>
              <li>
                <Link href="/artigos" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                  Artigos
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li className="text-[#E5E7EB]">Gestão Estratégica</li>
              <li className="text-[#E5E7EB]">Qualidade & Acreditação</li>
              <li className="text-[#E5E7EB]">Finanças & Orçamento</li>
              <li className="text-[#E5E7EB]">Setor Público</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="text-[#C7A25B] flex-shrink-0 mt-1" />
                <div>
                  <a href="https://wa.me/5562981859003" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                    (62) 98185-9003
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#C7A25B] flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:contato@nucleocore.com.br" className="text-[#E5E7EB] hover:text-[#C7A25B] transition-colors">
                    contato@nucleocore.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#C7A25B] flex-shrink-0 mt-1" />
                <div className="text-[#E5E7EB]">Goiânia, GO - Brasil</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#E5E7EB]">
            © {currentYear} Núcleo Core. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}