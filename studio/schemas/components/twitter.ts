export default {
  name: 'twitter',
  type: 'object',
  title: 'Post do Twitter',
  fields: [
    {
      name: 'embed',
      type: 'string',
      title: 'Código de incorporação',
      validation: (Rule) => Rule.required(),
    },
  ],
}
