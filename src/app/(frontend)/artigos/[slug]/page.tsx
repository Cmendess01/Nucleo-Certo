'use client'

import { useEffect, useState } from 'react';
import { articles, Article } from '@/data/articles';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

export default function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const found = articles.find((a: Article) => a.id.toString() === slug);
    setArticle(found || null);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#0D1B2A] mb-6">
            Artigo não encontrado
          </h1>
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 text-[#C7A25B] hover:text-[#A98845] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Artigos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/artigos"
          className="inline-flex items-center gap-2 text-[#C7A25B] hover:text-[#A98845] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Artigos
        </Link>

        <article>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-[#4A4A4A] mb-8">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="text-[#C7A25B]">{article.category}</span>
          </div>

          {article.image && (
            <div className="relative w-full h-96 mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#4A4A4A] leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="text-[#4A4A4A] leading-relaxed space-y-4">
              {article.content || 'Conteúdo do artigo em desenvolvimento...'}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}