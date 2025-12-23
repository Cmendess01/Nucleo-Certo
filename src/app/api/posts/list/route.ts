import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';
import type { Where } from 'payload';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config });
    
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const category = searchParams.get('category');

    const query: Where = {
      status: { equals: 'published' },
    };

    if (category && category !== 'Todos') {
      query.category = { equals: category };
    }

    const posts = await payload.find({
      collection: 'posts',
      where: query,
      limit,
      page,
      sort: '-publishedAt',
    });

    return NextResponse.json(posts, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json(
      { 
        error: 'Erro ao buscar posts', 
        details: error instanceof Error ? error.message : 'Unknown error',
        docs: [],
        totalDocs: 0,
        totalPages: 0,
      },
      { status: 500 }
    );
  }
}