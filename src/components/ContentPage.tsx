'use client'

import { 
  BookOpen, FileText, Video, Headphones, Calendar, Tag, 
  User, ArrowRight, Download, ExternalLink, Clock
} from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleCard } from './ArticleCard';

interface ContentPageProps {
  onNavigate?: (path: string) => void;
}

export function ContentPage({ onNavigate }: ContentPageProps) {
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const featured = {
    type: 'Livro',
    icon: BookOpen,
    title: 'O Guardião da Saúde',
    subtitle: 'O gestor de alta performance em organizações de saúde',
    author: 'Igor Bezerra',
    description: 'Obra completa sobre gestão estratégica em saúde, abordando liderança, governança, qualidade e humanização no setor.',
    publisher: 'Editora Contato Comunicação',
  };

  const categories = [
    { icon: FileText, title: 'Artigos', count: '25+' },
    { icon: Video, title: 'Vídeos', count: '15+' },
    { icon: Headphones, title: 'Podcasts', count: '10+' },
    { icon: Download, title: 'E-books', count: '8+' },
  ];

  const contents = [
    {
      type: 'Artigo',
      icon: FileText,
      title: 'Gestão Estratégica em Tempos de Crise',
      description: 'Como manter a performance organizacional em cenários desafiadores',
      date: '15 Nov 2024',
      readTime: '8 min',
      tags: ['Gestão', 'Estratégia'],
    },
    {
      type: 'E-book',
      icon: Download,
      title: 'Guia Completo de Acreditação ONA',
      description: 'Passo a passo para implementação dos níveis 1, 2 e 3',
      date: '10 Nov 2024',
      readTime: '45 min',
      tags: ['Qualidade', 'Acreditação'],
    },
    {
      type: 'Vídeo',
      icon: Video,
      title: 'KPIs Essenciais para Hospitais',
      description: 'Os indicadores mais importantes para gestão hospitalar',
      date: '5 Nov 2024',
      readTime: '12 min',
      tags: ['KPIs', 'Indicadores'],
    },
    {
      type: 'Artigo',
      icon: FileText,
      title: 'Segurança do Paciente: Cultura e Prática',
      description: 'Construindo uma cultura de segurança efetiva',
      date: '1 Nov 2024',
      readTime: '10 min',
      tags: ['Segurança', 'Qualidade'],
    },
    {
      type: 'Podcast',
      icon: Headphones,
      title: 'Humanização na Gestão em Saúde',
      description: 'Entrevista com Igor Bezerra sobre liderança humanizada',
      date: '28 Out 2024',
      readTime: '35 min',
      tags: ['Liderança', 'Humanização'],
    },
    {
      type: 'E-book',
      icon: Download,
      title: 'Metodologias NEO, MMGS e MPCO',
      description: 'Conheça nossas metodologias proprietárias em detalhes',
      date: '20 Out 2024',
      readTime: '30 min',
      tags: ['Metodologias', 'Estratégia'],
    },
  ];

  return (
    <div className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Conteúdos & Conhecimento
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto">
            Artigos, e-books, vídeos e podcasts sobre gestão em saúde
          </p>
        </div>
      </section>

      {/* FEATURED - BOOK */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Destaque</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Livro do CEO
            </h2>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={bookImage}
                    alt="O Guardião da Saúde - Igor Bezerra"
                    className="w-80 h-96 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B] flex items-center justify-center mb-6">
                  <featured.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-semibold text-[#0D1B2A] mb-2">
                  {featured.title}
                </h3>
                <p className="text-xl text-[#0D1B2A] mb-4">
                  {featured.subtitle}
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featured.description}
                </p>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5 text-[#C7A25B]" />
                    <span>{featured.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <BookOpen className="w-5 h-5 text-[#C7A25B]" />
                    <span>{featured.publisher}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleNavigate('/contato')}
                  className="px-6 py-3 bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all inline-flex items-center gap-2"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Categorias</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Tipos de Conteúdo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diversos formatos para seu aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B]/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-[#C7A25B]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-2">
                  {category.title}
                </h3>
                <p className="text-2xl font-semibold text-[#C7A25B]">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C7A25B]/10 mb-6">
              <span className="text-xs font-medium uppercase tracking-wide text-[#0D1B2A]">Artigos</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
              Publicações Recentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Artigos especializados em gestão de saúde, qualidade e estratégia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => handleNavigate('/artigos')}
              className="px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
            >
              Ver Todos os Artigos
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Receba Nossos Conteúdos
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 leading-relaxed">
            Inscreva-se para receber artigos exclusivos sobre gestão em saúde
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Entrar em Contato
          </button>
        </div>
      </section>
    </div>
  );
}