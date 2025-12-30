import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@payload-config';
import { Calendar, User, ArrowLeft, Share2, ArrowRight } from 'lucide-react';

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

function lexicalToHtml(content: unknown): string {
    if (!content) return '<p>Conteúdo não disponível.</p>';
    
    // Se já for string HTML, retorna direto
    if (typeof content === 'string') {
        return content;
    }
    
    try {
        const root = (content as Record<string, unknown>).root || content;
        
        if (!root || typeof root !== 'object' || !('children' in root)) {
            return '<p>Conteúdo em formato inválido.</p>';
        }
        
        const processNode = (node: Record<string, unknown>): string => {
            if (!node) return '';
            
            const type = node.type as string;
            const children = node.children as Record<string, unknown>[] | undefined;
            
            // HTML direto
            if (type === 'html') {
                return (node.html as string) || '';
            }
            
            // Texto
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
            
            // Parágrafo
            if (type === 'paragraph') {
                const content = children?.map(processNode).join('') || '';
                return content ? `<p>${content}</p>` : '';
            }
            
            // Headings
            if (type === 'heading') {
                const tag = (node.tag as string) || 'h2';
                const content = children?.map(processNode).join('') || '';
                return `<${tag}>${content}</${tag}>`;
            }
            
            // Listas
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
            
            // Links
            if (type === 'link') {
                const url = (node.url as string) || '#';
                const content = children?.map(processNode).join('') || '';
                const rel = node.rel as string | undefined;
                const target = node.target as string | undefined;
                
                return `<a href="${url}"${target ? ` target="${target}"` : ''}${rel ? ` rel="${rel}"` : ' rel="noopener noreferrer"'}>${content}</a>`;
            }
            
            // Quote
            if (type === 'quote') {
                const content = children?.map(processNode).join('') || '';
                return `<blockquote>${content}</blockquote>`;
            }
            
            // Code block
            if (type === 'code') {
                const content = children?.map(processNode).join('') || '';
                return `<pre><code>${content}</code></pre>`;
            }
            
            // Line break
            if (type === 'linebreak') {
                return '<br>';
            }
            
            // Horizontal rule
            if (type === 'horizontalrule') {
                return '<hr>';
            }
            
            // Fallback: processar children se existirem
            if (children && Array.isArray(children)) {
                return children.map(processNode).join('');
            }
            
            return '';
        };
        
        return (root.children as Record<string, unknown>[]).map(processNode).join('');
    } catch (error) {
        console.error('Erro ao processar conteúdo:', error);
        return '<p>Erro ao carregar conteúdo.</p>';
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

    const contentHtml = lexicalToHtml(post.content);

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
                        <Link
                            href="/artigos"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Voltar para Artigos
                        </Link>

                        <div className="mb-4">
                            <span className="px-4 py-1.5 bg-[#C7A25B] text-white text-sm font-medium rounded-full">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>Por {post.author}</span>
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
                    
                    <div className="mb-12 pb-8 border-b border-gray-200">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div 
                        className="prose prose-lg max-w-none prose-headings:text-[#0D1B2A] prose-p:text-gray-700 prose-a:text-[#C7A25B] prose-strong:text-[#0D1B2A] prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-[#C7A25B] prose-blockquote:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Share2 className="w-5 h-5" />
                                <span className="font-medium">Compartilhar este artigo</span>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://seusite.com/artigos/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://seusite.com/artigos/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all"
                                >
                                    Twitter
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://seusite.com/artigos/${post.slug}`)}`}
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
                            {relatedPosts.map((relatedPost) => {
                                const relatedImageUrl = typeof relatedPost.featuredImage === 'object' && relatedPost.featuredImage !== null && 'url' in relatedPost.featuredImage
                                    ? relatedPost.featuredImage.url || '/placeholder.jpg'
                                    : '/placeholder.jpg';

                                return (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/artigos/${relatedPost.slug}`}
                                        className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedImageUrl}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-[#C7A25B] text-white text-xs font-semibold rounded-full">
                                                    {relatedPost.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-[#C7A25B] transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(relatedPost.publishedAt).toLocaleDateString('pt-BR')}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-700">Por {relatedPost.author}</span>
                                                <div className="flex items-center gap-2 text-[#C7A25B] group-hover:gap-3 transition-all duration-300">
                                                    <span className="text-sm font-medium">Leia mais</span>
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
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