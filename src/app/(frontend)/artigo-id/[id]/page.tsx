import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPayload } from 'payload';
import config from '@payload-config';

interface PostData {
    id: string | number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: {
        url?: string | null;
        alt?: string | null;
    } | string | null;
    author: string;
    category: string;
    tags?: Array<{ tag?: string | null; id?: string | null }> | null;
    readTime: number;
    publishedAt: string;
    status: string;
}

interface ArticlePageProps {
    params: {
        id: string;
    };
}

async function getPostById(id: string): Promise<PostData | null> {
    try {
        const payload = await getPayload({ config });

        // Converte id para número se for numérico
        const postId = !isNaN(Number(id)) ? Number(id) : id;

        const post = await payload.findByID({
            collection: 'posts',
            id: postId,
        });

        if (!post || post.status !== 'published') {
            return null;
        }

        return post as unknown as PostData;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
}

export default async function ArticleIdPage({ params }: ArticlePageProps) {
    const post = await getPostById(params.id);

    if (!post) {
        notFound();
    }

    const featuredImageUrl = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'url' in post.featuredImage
        ? post.featuredImage.url || '/placeholder.jpg'
        : '/placeholder.jpg';

    const featuredImageAlt = typeof post.featuredImage === 'object' && post.featuredImage !== null && 'alt' in post.featuredImage
        ? post.featuredImage.alt || post.title
        : post.title;

    return (
        <div className="min-h-screen bg-white">
            {/* Header do Artigo */}
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

            {/* Imagem Destaque */}
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

            {/* Conteúdo do Artigo */}
            <article className="max-w-4xl mx-auto px-6 py-16">
                <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: typeof post.content === 'string' ? post.content : '<p>Conteúdo em breve...</p>' }}
                />
            </article>

            {/* Tags */}
            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className="max-w-4xl mx-auto px-6 pb-16">
                    <div className="flex flex-wrap gap-2">
                        {post.tags
                            .filter((tagObj): tagObj is { tag: string; id?: string | null } => 
                                tagObj !== null && typeof tagObj === 'object' && typeof tagObj.tag === 'string'
                            )
                            .map((tagObj, index) => (
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

            {/* Botão Voltar */}
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