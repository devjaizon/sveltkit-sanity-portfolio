export default {
  name: 'customQuote',
  type: 'object',
  title: 'Adicionar citação',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Citação',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'font',
      type: 'string',
      title: 'Fonte',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fontUrl',
      type: 'url',
      title: 'Link da fonte',
    },
  ],
}
