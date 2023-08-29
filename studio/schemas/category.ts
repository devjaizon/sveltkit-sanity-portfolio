export default {
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 5,
      validation: (Rule) => [
        Rule.required().min(200).error('A Descrição precisa ter pelo mensos 200 caracteres!'),
        Rule.max(270).warning('A Descrição funciona melhor quando mais curta!!'),
        Rule.max(280).error('A Descrição precisa ter no máximo 270 caracteres!'),
      ],
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'customImage',
    },
  ],
}
