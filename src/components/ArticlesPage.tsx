'use client'

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { AnimatedSection } from './AnimatedSection';

interface ArticlesPageProps {
  onNavigate?: (path: string) => void;
}

export function ArticlesPage({ onNavigate }: ArticlesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Extrair categorias únicas
  const categories = ['Todos', ...Array.from(new Set(articles.map(a => a.category)))];

  // Filtrar artigos
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6">
            Artigos e Insights
          </h1>
          <p className="text-lg lg:text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Conteúdo especializado em gestão de saúde, qualidade, estratégia e inovação
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 lg:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            
            {/* Busca */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A25B] focus:border-transparent"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filtrar:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-[#C7A25B] text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#C7A25B] hover:text-[#C7A25B]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Contador de resultados */}
            <div>
              <p className="text-sm lg:text-base text-gray-600">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article) => (
                <AnimatedSection key={article.id}>
                  <ArticleCard
                    article={article}
                    onNavigate={onNavigate}
                  />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-6">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="px-6 py-3 bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D1B2A] mb-6">
            Quer Receber Nossos Conteúdos?
          </h2>
          <p className="text-lg lg:text-xl text-[#0D1B2A] mb-10 leading-relaxed">
            Entre em contato e fique por dentro das melhores práticas em gestão de saúde
          </p>
          <button
            onClick={() => onNavigate && onNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#2E3A45] transition-all"
          >
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
}