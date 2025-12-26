'use client'

import { useState } from 'react';
import { Search, Filter, Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function ArtigosAntigosPage() {
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

                        {/* Contador */}
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
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/artigo-id/${article.id}`}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Imagem */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-semibold rounded-full shadow-lg">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Conteúdo */}
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
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">{article.author}</span>
                                        <ArrowRight className="w-5 h-5 text-[#C7A25B] group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}