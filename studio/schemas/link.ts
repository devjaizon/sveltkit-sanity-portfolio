export default {
  name: 'link',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
      validation: (Rule) => [
        Rule.required().min(120).error('A Descrição precisa ter pelo mensos 120 caracteres!'),
        Rule.max(160).warning('A Descrição funciona melhor quando mais curta!!'),
        Rule.max(180).error('A Descrição precisa ter no máximo 270 caracteres!'),
      ],
    },
    {
      title: 'category',
      name: 'Categoria',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
}
