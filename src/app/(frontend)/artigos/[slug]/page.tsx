import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

interface Tag {
    tag?: string | null;
    id?: string | null;
}

interface Media {
    id: string;
    url?: string | null;
    alt?: string | null;
    filename?: string | null;
}

interface PostData {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: unknown;
    featuredImage?: string | Media | null;
    author: string;
    category: string;
    tags?: Tag[] | null;
    readTime: number;
    publishedAt: string;
    status: string;
}

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

function processContent(content: unknown): string {
    if (!content) return '<p>Conteúdo não disponível.</p>';
    
    // Se for string (Markdown), converte para HTML
    if (typeof content === 'string') {
        let html = content;
        
        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Italic
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
        
        // Blockquotes
        html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
        
        // Unordered lists - processa linha por linha
        const lines = html.split('\n');
        let inList = false;
        const processedLines: string[] = [];
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.match(/^- /)) {
                if (!inList) {
                    processedLines.push('<ul>');
                    inList = true;
                }
                processedLines.push(`<li>${line.replace(/^- /, '')}</li>`);
            } else if (line.match(/^\d+\. /)) {
                if (!inList) {
                    processedLines.push('<ol>');
                    inList = true;
                }
                processedLines.push(`<li>${line.replace(/^\d+\. /, '')}</li>`);
            } else {
                if (inList) {
                    const prevLine = processedLines[processedLines.length - 1];
                    if (prevLine && prevLine.includes('<ul>')) {
                        processedLines.push('</ul>');
                    } else if (prevLine && prevLine.includes('<ol>')) {
                        processedLines.push('</ol>');
                    }
                    inList = false;
                }
                processedLines.push(line);
            }
        }
        
        if (inList) {
            processedLines.push('</ul>');
        }
        
        html = processedLines.join('\n');
        
        // Paragraphs - processa blocos separados por linha dupla
        html = html.split('\n\n').map(block => {
            const trimmed = block.trim();
            if (!trimmed) return '';
            if (trimmed.startsWith('<')) return trimmed;
            return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
        }).join('\n');
        
        return html;
    }
    
    // Se for objeto Lexical, processa normalmente
    try {
        const root = (content as Record<string, unknown>).root || content;
        
        if (!root || typeof root !== 'object' || !('children' in root)) {
            return '<p>Conteúdo em formato inválido.</p>';
        }
        
        const processNode = (node: Record<string, unknown>): string => {
            if (!node) return '';
            
            const type = node.type as string;
            const children = node.children as Record<string, unknown>[] | undefined;
            
            if (type === 'text') {
                let text = (node.text as string) || '';
                const format = node.format as number | undefined;
                
                if (format) {
                    if (format & 1) text = `<strong>${text}</strong>`;
                    if (format & 2) text = `<em>${text}</em>`;
                    if (format & 4) text = `<u>${text}</u>`;
                    if (format & 8) text = `<s>${text}</s>`;
                    if (format & 16) text = `<code>${text}</code>`;
                }
                
                return text;
            }
            
            if (type === 'paragraph') {
                const content = children?.map(processNode).join('') || '';
                return content ? `<p>${content}</p>` : '';
            }
            
            if (type === 'heading') {
                const tag = (node.tag as string) || 'h2';
                const content = children?.map(processNode).join('') || '';
                return `<${tag}>${content}</${tag}>`;
            }
            
            if (type === 'list') {
                const listType = node.listType as string;
                const tag = listType === 'number' ? 'ol' : 'ul';
                const content = children?.map(processNode).join('') || '';
                return `<${tag}>${content}</${tag}>`;
            }
            
            if (type === 'listitem') {
                const content = children?.map(processNode).join('') || '';
                return `<li>${content}</li>`;
            }
            
            if (type === 'link') {
                const url = (node.url as string) || '#';
                const content = children?.map(processNode).join('') || '';
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${content}</a>`;
            }
            
            if (type === 'quote') {
                const content = children?.map(processNode).join('') || '';
                return `<blockquote>${content}</blockquote>`;
            }
            
            if (type === 'code') {
                const content = children?.map(processNode).join('') || '';
                return `<pre><code>${content}</code></pre>`;
            }
            
            if (type === 'linebreak') {
                return '<br>';
            }
            
            if (children && Array.isArray(children)) {
                return children.map(processNode).join('');
            }
            
            return '';
        };
        
        return ((root as Record<string, unknown>).children as Record<string, unknown>[]).map(processNode).join('');
    } catch (error) {
        console.error('Erro ao processar conteúdo:', error);
        return '<p>Erro ao carregar conteúdo.</p>';
    }
}

async function getPost(slug: string): Promise<PostData | null> {
    try {
        const payload = await getPayload({ config });

        const result = await payload.find({
            collection: 'posts',
            where: {
                slug: { equals: slug },
                status: { equals: 'published' },
            },
            limit: 1,
        });

        return (result.docs[0] as unknown as PostData) || null;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
}

async function getRelatedPosts(category: string, currentSlug: string): Promise<PostData[]> {
    try {
        const payload = await getPayload({ config });

        const result = await payload.find({
            collection: 'posts',
            where: {
                category: { equals: category },
                slug: { not_equals: currentSlug },
                status: { equals: 'published' },
            },
            limit: 3,
        });

        return (result.docs as unknown as PostData[]) || [];
    } catch (error) {
        console.error('Erro ao buscar posts relacionados:', error);
        return [];
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(post.category, post.slug);

    const featuredImageUrl = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'url' in post.featuredImage
        ? post.featuredImage.url || '/placeholder.jpg'
        : '/placeholder.jpg';

    const featuredImageAlt = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'alt' in post.featuredImage
        ? post.featuredImage.alt || post.title
        : post.title;

    const htmlContent = processContent(post.content);

    return (
        <div className="bg-white">
            {/* Hero com Imagem */}
            <section className="relative h-[500px] bg-gray-900">
                <Image
                    src={featuredImageUrl}
                    alt={featuredImageAlt}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
                
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16 w-full">
                        {/* Breadcrumb */}
                        <Link
                            href="/artigos"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Artigos
                        </Link>

                        {/* Categoria */}
                        <div className="mb-4">
                            <span className="px-4 py-1.5 bg-[#C7A25B] text-white text-sm font-medium rounded-full">
                                {post.category}
                            </span>
                        </div>

                        {/* Título */}
                        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
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
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Conteúdo HTML */}
                    <div 
                        className="prose prose-lg max-w-none prose-headings:text-[#0D1B2A] prose-p:text-gray-700 prose-a:text-[#C7A25B] prose-strong:text-[#0D1B2A] prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-[#C7A25B] prose-blockquote:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />

                    {/* Compartilhar */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Share2 className="w-5 h-5" />
                                <span className="font-medium">Compartilhar este artigo</span>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artigos Relacionados */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold text-[#0D1B2A] mb-4">
                                Artigos Relacionados
                            </h2>
                            <p className="text-lg text-gray-600">
                                Mais conteúdo sobre {post.category}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/artigos/${relatedPost.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={typeof relatedPost.featuredImage === 'object' && relatedPost.featuredImage?.url || '/placeholder.jpg'}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-semibold text-[#C7A25B] uppercase tracking-wide">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-[#0D1B2A] mt-2 mb-2 group-hover:text-[#C7A25B] transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
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