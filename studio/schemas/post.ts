import {LinkIcon} from '@sanity/icons'

const excerptMin = 40
const excerptMax = 50
const textMin = 350
const textMax = 650
const titleMin = 35
const titleMax = 80
const metaMin = 100
const metaMax = 155

export default {
  title: 'Posts',
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        Rule.min(titleMin).error(`O título deve ter pelo menos ${titleMin} caracteres!!`),
        Rule.max(titleMax).error(`O título deve ter no máximo ${titleMax} caracteres!!`),
      ],
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
      name: 'author',
      title: 'Autor',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'author'}],
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'meta',
      title: 'Metadescrição',
      type: 'text',
      rows: 3,
      validation: (Rule) => [
        (Rule) => Rule.required(),
        Rule.min(metaMin).error(`A metadescrição deve ter pelo menos ${metaMin} caracteres!!`),
        Rule.max(metaMax).error(`A metadescrição deve ter no máximo ${metaMax} caracteres!!`),
        Rule.custom((val) => {
          console.log(`A metadescrição tem ${val.length} caracteres!`)
          return true
        }),
      ],
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 5,
      validation: (Rule) => [
        (Rule) => Rule.required(),
        Rule.custom((val) => {
          console.log(`O resumo tem ${val.trim().split(/\s+/).length} palavras!`)
          if (val.trim().split(/\s+/).length < excerptMin)
            return `O resumo deve ter pelo menos ${excerptMin} palavras!!`
          if (val.trim().split(/\s+/).length > excerptMax)
            return `O resumo deve ter no máximo ${excerptMax} palavras!!`
          return true
        }),
      ],
    },
    {
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'customImage',
    },
    {
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Corpo do texto',
      type: 'array',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        Rule.custom((val) => {
          let texto = ''
          const text = val.map((block) => {
            if (block._type === 'block' && typeof block.children[0].text == 'string') {
              return block.children[0].text
            }
          })

          text.forEach((element) => {
            if (typeof element === 'string') return (texto = texto + ' ' + element)
          })

          console.log(`O texto tem ${texto.trim().split(/\s+/).length} palavras!`)

          if (texto.trim().split(/\s+/).length < textMin)
            return `O texto deve ter pelo menos ${textMin} palavras!!`
          if (texto.trim().split(/\s+/).length > textMax)
            return `O texto deve ter no máximo ${textMax} palavras!!`
          return true
        }),
      ],
      of: [
        {
          type: 'block',

          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
          ],
          lists: [
            {title: 'Marcadores', value: 'bullet'},
            {title: 'Numerado', value: 'number'},
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link externo',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                    title: 'Fonte',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: false,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Link interno',
                // we can add the icon which will show in the toolbar by importing an icon from a library or pasting in a react component.
                // we use import { LinkIcon } from '@sanity/icons' in this case
                icon: LinkIcon,
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Fonte',
                    to: [{type: 'post'}, {type: 'category'}],
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'customImage',
        },
        {
          type: 'youtube',
        },
        {
          type: 'twitter',
        },
        {
          type: 'customQuote',
        },
      ],
    },
    {
      name: 'mainVideo',
      title: 'Video de referência',
      type: 'youtube',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'author.name',
    },
  },
}
