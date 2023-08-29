import type { PageLoad } from './$types'
// import { getPost } from '$lib/utils/sanity'
import { client } from '$lib/config/sanity/config'

export const ssr = false

export const load = (async ({ params }) => {
    const data = await client.fetch(
        `*[_type == 'post' && slug.current == '${params.slug}'][0]{
            meta,
            title,
            excerpt,
            publishedAt,
            _createdAt,
            body,
            mainVideo,
            mainImage
        }`
    )

    if (data) return data

    throw new Error('Not found!!')
}) satisfies PageLoad

// mainImage:{
// alt, subtitle, titleAlt, 'url': asset->url
//             },
