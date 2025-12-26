'use client'

import { useState, useEffect } from 'react';
import { Search, Filter, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  author: string;
  category: string;
  readTime: number;
  publishedAt: string;
}

export function ArticlesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Gestão Estratégica',
    'Qualidade e Acreditação',
    'Gestão Financeira',
    'Gestão de Pessoas',
    'Inovação e Tecnologia',
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const params = new URLSearchParams({ limit: '50' });
        
        const response = await fetch(`/api/posts/list?${params}`);
        const data = await response.json();
        
        setPosts(data.docs || []);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredArticles = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#C7A25B] mx-auto mb-4"></div>
          <p className="text-lg text-[#4A4A4A]">Carregando artigos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
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

      <section className="py-8 lg:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            
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

            <div>
              <p className="text-sm lg:text-base text-gray-600">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((post) => (
                <Link
                  key={post.id}
                  href={`/artigos/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.featuredImage?.url || '/placeholder.jpg'}
                      alt={post.featuredImage?.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-semibold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#C7A25B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                      <ArrowRight className="w-5 h-5 text-[#C7A25B] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
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

      <section className="py-16 lg:py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D1B2A] mb-6">
            Quer Receber Nossos Conteúdos?
          </h2>
          <p className="text-lg lg:text-xl text-[#0D1B2A] mb-10 leading-relaxed">
            Entre em contato e fique por dentro das melhores práticas em gestão de saúde
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-[#0D1B2A] text-white font-semibold rounded-lg hover:bg-[#2E3A45] transition-all"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}