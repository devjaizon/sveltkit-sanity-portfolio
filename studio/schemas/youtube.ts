export default {
  name: 'youtube',
  type: 'object',
  title: 'Vídeo do Youtube',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título do vídeo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url do vídeo',
      validation: (Rule) => Rule.required(),
    },
  ],
}
