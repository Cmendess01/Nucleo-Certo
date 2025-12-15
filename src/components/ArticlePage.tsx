'use client'

import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { getArticleById, articles } from '../data/articles';
import { ArticleCard } from './ArticleCard';
import { AnimatedSection } from './AnimatedSection';

interface ArticlePageProps {
  articleId: string;
  onNavigate?: (path: string) => void;
}

export function ArticlePage({ articleId, onNavigate }: ArticlePageProps) {
  const article = getArticleById(articleId);

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  if (!article) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#0D1B2A] mb-4">
            Artigo Não Encontrado
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            O artigo que você procura não existe ou foi removido.
          </p>
          <button
            onClick={() => handleNavigate('/artigos')}
            className="px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
          >
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    );
  }

  // Artigos relacionados (mesma categoria, excluindo o atual)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero com Imagem */}
      <section className="relative h-[500px] bg-gray-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16 w-full">
            {/* Breadcrumb */}
            <button
              onClick={() => handleNavigate('/artigos')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Artigos
            </button>

            {/* Categoria */}
            <div className="mb-4">
              <span className="px-4 py-1.5 bg-[#C7A25B] text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Excerpt */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Conteúdo HTML */}
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Compartilhar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Compartilhar este artigo</span>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                  LinkedIn
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Relacionados */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                Artigos Relacionados
              </h2>
              <p className="text-lg text-gray-600">
                Mais conteúdo sobre {article.category}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
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
      )}

      {/* CTA */}
      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Interessado em Nossos Serviços?
          </h2>
          <p className="text-xl text-[#0D1B2A] mb-10 leading-relaxed">
            Agende um diagnóstico gratuito e descubra como podemos transformar sua instituição
          </p>
          <button
            onClick={() => handleNavigate('/contato')}
            className="px-8 py-4 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#2E3A45] transition-all"
          >
            Fale Conosco
          </button>
        </div>
      </section>
    </div>
  );
}