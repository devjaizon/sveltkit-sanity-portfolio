export default {
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((val) => {
          // regex para testar nomes com duas palavras e separados por um espaço
          let reg = /^[a-zA-Z]+ [a-zA-Z]+$/
          if (!reg.test(val)) {
            return 'Por favor, insira apenas o seu primeiro nome e o sobrenome, separados por um único "espaço"!!'
          }
          return true
        }),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (Rule) => [
        Rule.required(),
        Rule.min(200).error('A Bio precisa ter pelo mensos 200 caracteres!'),
        Rule.max(270).warning('A Bio funciona melhor quando mais curta!!'),
        Rule.max(280).error('A Bio precisa ter no máximo 270 caracteres!'),
      ],
    },
    {
      name: 'profilePicture',
      title: 'Imagem de Perfil',
      type: 'customImage',
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{type: 'social'}],
    },
  ],
}
