'use client'

import { 
  BookOpen, FileText, Video, Headphones, 
  User, ArrowRight, Download
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: number;
  publishedAt: string;
  featuredImage?: {
    url?: string;
    alt?: string;
  };
}

// Mock de artigos para exemplo
const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'gestao-estrategica-saude',
    title: 'Gestão Estratégica em Saúde: O Caminho para a Excelência',
    excerpt: 'Descubra como implementar uma gestão estratégica eficaz em sua instituição de saúde.',
    category: 'Gestão Estratégica',
    author: 'Igor Bezerra',
    readTime: 8,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Gestão Estratégica',
    },
  },
  {
    id: '2',
    slug: 'acreditacao-ona',
    title: 'Acreditação ONA: Guia Completo',
    excerpt: 'Tudo o que você precisa saber para conquistar a acreditação ONA.',
    category: 'Qualidade',
    author: 'Igor Bezerra',
    readTime: 12,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Acreditação ONA',
    },
  },
  {
    id: '3',
    slug: 'governanca-clinica',
    title: 'Governança Clínica: Princípios e Práticas',
    excerpt: 'Como implementar uma governança clínica eficaz.',
    category: 'Gestão',
    author: 'Igor Bezerra',
    readTime: 10,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Governança Clínica',
    },
  },
  {
    id: '4',
    slug: 'gestao-financeira',
    title: 'Gestão Financeira Hospitalar',
    excerpt: 'Estratégias práticas para otimizar a gestão financeira.',
    category: 'Finanças',
    author: 'Igor Bezerra',
    readTime: 15,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Gestão Financeira',
    },
  },
  {
    id: '5',
    slug: 'qualidade-assistencial',
    title: 'Qualidade Assistencial em Foco',
    excerpt: 'Melhores práticas para garantir qualidade no atendimento.',
    category: 'Qualidade',
    author: 'Igor Bezerra',
    readTime: 9,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Qualidade Assistencial',
    },
  },
  {
    id: '6',
    slug: 'inovacao-saude',
    title: 'Inovação na Gestão de Saúde',
    excerpt: 'Como a inovação está transformando a gestão hospitalar.',
    category: 'Inovação',
    author: 'Igor Bezerra',
    readTime: 11,
    publishedAt: new Date().toISOString(),
    featuredImage: {
      url: '/placeholder.jpg',
      alt: 'Inovação em Saúde',
    },
  },
];

export function ContentPage() {
  const categories = [
    { icon: FileText, title: 'Artigos', count: '25+' },
    { icon: Video, title: 'Vídeos', count: '15+' },
    { icon: Headphones, title: 'Podcasts', count: '10+' },
    { icon: Download, title: 'E-books', count: '8+' },
  ];

  return (
    <div className="bg-white">
      
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-80 h-[480px]">
                  <Image
                    src="/assets/Livro.png"
                    alt="O Guardião da Saúde - Igor Bezerra"
                    width={320}
                    height={480}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-[#C7A25B] flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-semibold text-[#0D1B2A] mb-2">
                  O Guardião da Saúde
                </h3>
                <p className="text-xl text-[#0D1B2A] mb-4">
                  O gestor de alta performance em organizações de saúde
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Um guia completo para gestores que buscam excelência e transformação em suas instituições de saúde.
                </p>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5 text-[#C7A25B]" />
                    <span>Igor Bezerra</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <BookOpen className="w-5 h-5 text-[#C7A25B]" />
                    <span>Editora Nucleo Core</span>
                  </div>
                </div>
                <Link
                  href="/contato"
                  className="px-6 py-3 bg-[#C7A25B] text-white font-medium rounded-lg hover:bg-[#A98845] transition-all inline-flex items-center gap-2"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-white">
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
            {mockArticles.map((article) => (
              <Link
                key={article.id}
                href={`/artigos/${article.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#C7A25B] hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.featuredImage?.url || '/placeholder.jpg'}
                    alt={article.featuredImage?.alt || article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-[#C7A25B] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/artigos"
              className="inline-block px-8 py-4 bg-[#C7A25B] text-white font-semibold rounded-lg hover:bg-[#A98845] transition-all"
            >
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E6D2A8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#0D1B2A] mb-6">
            Receba Nossos Conteúdos
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 leading-relaxed">
            Inscreva-se para receber artigos exclusivos sobre gestão em saúde
          </p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-[#0D1B2A] text-white text-lg font-medium rounded-lg hover:bg-[#1F2937] transition-all"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}