import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'status', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug (URL)',
      admin: {
        description: 'URL amigável do artigo (ex: gestao-estrategica-saude)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Rascunho', value: 'draft' },
        { label: 'Publicado', value: 'published' },
        { label: 'Arquivado', value: 'archived' },
      ],
      defaultValue: 'draft',
      required: true,
      label: 'Status',
      admin: {
        position: 'sidebar',
        description: 'Apenas posts com status "Publicado" aparecem no site',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Resumo',
      admin: {
        description: 'Breve descrição do artigo (aparece nos cards)',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagem Destaque',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      defaultValue: 'Igor Bezerra',
      label: 'Autor',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Gestão Estratégica', value: 'Gestão Estratégica' },
        { label: 'Qualidade & Acreditação', value: 'Qualidade & Acreditação' },
        { label: 'Finanças', value: 'Finanças' },
        { label: 'Liderança', value: 'Liderança' },
        { label: 'Inovação', value: 'Inovação' },
        { label: 'Setor Público', value: 'Setor Público' },
      ],
      required: true,
      label: 'Categoria',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Data de Publicação',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
};