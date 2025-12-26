'use client'

import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: {
    url?: string;
    alt?: string;
  } | string;
  author: string;
  category: string;
  readTime: number;
  publishedAt: string;
}

interface ArticleCardProps {
  article: Post;
}

export function ArticleCard({ article }: ArticleCardProps) {
  if (!article) {
    return null;
  }

  const imageUrl = typeof article.featuredImage === 'object' && article.featuredImage?.url
    ? article.featuredImage.url
    : '/placeholder.jpg';

  const imageAlt = typeof article.featuredImage === 'object' && article.featuredImage?.alt
    ? article.featuredImage.alt
    : article.title;

  return (
    <Link
      href={`/artigos/${article.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-semibold rounded-full shadow-lg">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#C7A25B] transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.publishedAt).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} min</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{article.author}</span>
          <ArrowRight className="w-5 h-5 text-[#C7A25B] group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}