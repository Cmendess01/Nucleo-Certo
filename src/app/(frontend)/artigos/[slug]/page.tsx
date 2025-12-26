import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@payload-config';

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

function lexicalToHtml(content: unknown): string {
    if (!content) return '<p>Conteúdo não disponível.</p>';
    
    if (typeof content === 'string') return content;
    
    try {
        const root = (content as Record<string, unknown>).root || content;
        
        if (!root || typeof root !== 'object' || !('children' in root) || !Array.isArray(root.children)) {
            return '<p>Conteúdo em formato inválido.</p>';
        }
        
        const processNode = (node: Record<string, unknown>): string => {
            if (!node) return '';
            
            if (node.type === 'text') {
                let text = (node.text as string) || '';
                if (node.format) {
                    const format = node.format as number;
                    if (format & 1) text = `<strong>${text}</strong>`;
                    if (format & 2) text = `<em>${text}</em>`;
                    if (format & 4) text = `<u>${text}</u>`;
                }
                return text;
            }
            
            if (node.type === 'paragraph') {
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                return `<p>${children}</p>`;
            }
            
            if (node.type === 'heading') {
                const level = (node.tag as string) || 'h2';
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                return `<${level}>${children}</${level}>`;
            }
            
            if (node.type === 'list') {
                const tag = node.listType === 'number' ? 'ol' : 'ul';
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                return `<${tag}>${children}</${tag}>`;
            }
            
            if (node.type === 'listitem') {
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                return `<li>${children}</li>`;
            }
            
            if (node.type === 'link') {
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                const url = (node.url as string) || '#';
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${children}</a>`;
            }
            
            if (node.type === 'quote') {
                const children = (node.children as Record<string, unknown>[])?.map(processNode).join('') || '';
                return `<blockquote>${children}</blockquote>`;
            }
            
            if (node.children && Array.isArray(node.children)) {
                return (node.children as Record<string, unknown>[]).map(processNode).join('');
            }
            
            return '';
        };
        
        return (root.children as Record<string, unknown>[]).map(processNode).join('');
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

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const featuredImageUrl = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'url' in post.featuredImage
        ? post.featuredImage.url || '/placeholder.jpg'
        : '/placeholder.jpg';

    const featuredImageAlt = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'alt' in post.featuredImage
        ? post.featuredImage.alt || post.title
        : post.title;

    const htmlContent = lexicalToHtml(post.content);

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-6 flex items-center gap-4 text-sm">
                        <span className="px-3 py-1 bg-[#C7A25B] rounded-full">
                            {post.category}
                        </span>
                        <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
                        <span>•</span>
                        <span>{post.readTime} min de leitura</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {post.title}
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-6">
                        {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#C7A25B] rounded-full flex items-center justify-center text-white font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-gray-300">Autor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-10">
                <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
                    <Image
                        src={featuredImageUrl}
                        alt={featuredImageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-16">
                <div 
                    className="prose prose-lg prose-headings:text-[#0D1B2A] prose-p:text-gray-700 prose-a:text-[#C7A25B] prose-strong:text-[#0D1B2A] max-w-none"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </article>

            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className="max-w-4xl mx-auto px-6 pb-16">
                    <div className="flex flex-wrap gap-2">
                        {post.tags
                            .filter((tagObj: Tag): tagObj is { tag: string; id?: string | null } => 
                                tagObj !== null && typeof tagObj === 'object' && typeof tagObj.tag === 'string'
                            )
                            .map((tagObj: { tag: string; id?: string | null }, index: number) => (
                                <span
                                    key={tagObj.id || index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                    #{tagObj.tag}
                                </span>
                            ))}
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-6 pb-16">
                <Link
                    href="/artigos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7A25B] text-white rounded-lg hover:bg-[#A98845] transition-colors"
                >
                    ← Voltar para Artigos
                </Link>
            </div>
        </div>
    );
}