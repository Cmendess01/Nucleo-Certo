import { ArrowRight } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  onNavigate?: (path: string) => void;
}

export function ArticleCard({ article, onNavigate }: ArticleCardProps) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(`/artigo/${article.id}`);
    }
  };

  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Imagem */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-medium rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Data */}
        <div className="text-xs text-gray-500 mb-3">
          {article.date}
        </div>

        {/* Título */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#0D1B2A] mb-3 line-clamp-2 group-hover:text-[#C7A25B] transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xs sm:text-sm text-gray-600">Por {article.author}</span>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C7A25B] hover:text-[#A98845] transition-colors group"
          >
            Leia mais
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}