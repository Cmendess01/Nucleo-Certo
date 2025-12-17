import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL amigável (ex: gestao-estrategica-em-saude)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Resumo do artigo (máx. 200 caracteres)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'select',
      options: [
        { label: 'Igor Bezerra', value: 'igor-bezerra' },
        { label: 'Oslane Bezerra', value: 'oslane-bezerra' },
      ],
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Gestão Estratégica', value: 'gestao-estrategica' },
        { label: 'Qualidade e Acreditação', value: 'qualidade-acreditacao' },
        { label: 'Gestão Financeira', value: 'gestao-financeira' },
        { label: 'Gestão de Pessoas', value: 'gestao-pessoas' },
        { label: 'Inovação e Tecnologia', value: 'inovacao-tecnologia' },
      ],
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'readTime',
      type: 'number',
      required: true,
      admin: {
        description: 'Tempo de leitura em minutos',
      },
    },
  ],
}