import { useState, useEffect } from 'react';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  featuredImage: {
    url: string;
    alt: string;
  };
  author: string;
  category: string;
  tags: Array<{ tag: string }>;
  readTime: number;
  views: number;
  publishedAt: string;
}

export function usePosts(limit = 10, category?: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const params = new URLSearchParams({
          limit: limit.toString(),
        });

        if (category) {
          params.append('category', category);
        }

        const response = await fetch(`/api/posts?${params}`);
        const data = await response.json();
        
        setPosts(data.docs);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar artigos');
        setLoading(false);
      }
    }

    fetchPosts();
  }, [limit, category]);

  return { posts, loading, error };
}