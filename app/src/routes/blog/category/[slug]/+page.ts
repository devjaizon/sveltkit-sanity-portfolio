import type { PageLoad } from './$types'
import { client } from '$lib/config/sanity/config'

export const ssr = false

export const load = (async ({ params }) => {
    // console.log(params.slug)

    const data = await client.fetch(
        `*[_type == 'post' && slug.current == '${params.slug}'][0]{
            meta,
            title,
            excerpt,
            mainImage,
            publishedAt,
            _createdAt,
            body,
            mainVideo
        }`
    )

    if (data) return data

    throw new Error('Not found!!')
}) satisfies PageLoad
