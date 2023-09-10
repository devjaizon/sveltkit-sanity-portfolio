export default {
  name: 'social',
  type: 'object',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Link',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Ícone',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
}
