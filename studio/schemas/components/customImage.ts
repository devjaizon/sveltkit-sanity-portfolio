export default {
  name: 'customImage',
  title: 'Imagem',
  type: 'image',
  validation: (Rule) => Rule.required(),
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Texto alternativo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Legenda',
      validation: (Rule) => Rule.required(),
    },
  ],
}
