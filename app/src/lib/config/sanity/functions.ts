import imageUrlBuilder from '@sanity/image-url'
import { client } from './config'

const builder = imageUrlBuilder(client)

export const urlFor = (source: String) => {
    return builder.image(source)
}
