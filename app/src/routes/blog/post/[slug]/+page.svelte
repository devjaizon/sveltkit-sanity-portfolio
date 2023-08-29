<script lang="ts">
    import { PortableText } from '@portabletext/svelte'

    import Headings from '$lib/config/sanity/custom/Headings.svelte'
    import RenderImage from '$lib/config/sanity/custom/RenderImage.svelte'
    import RenderTwitter from '$lib/config/sanity/custom/RenderTwitter.svelte'
    import RenderYoutube from '$lib/config/sanity/custom/RenderYoutube.svelte'
    import InternalLink from '$lib/config/sanity/custom/InternalLink.svelte'
    import ExternalLink from '$lib/config/sanity/custom/ExternalLink.svelte'
    import BlockQuote from '$lib/config/sanity/custom/BlockQuote.svelte'
    import ListItem from '$lib/config/sanity/custom/ListItem.svelte'
    import BulletList from '$lib/config/sanity/custom/BulletList.svelte'
    import NumberList from '$lib/config/sanity/custom/NumberList.svelte'
    import { urlFor } from '$lib/config/sanity/functions.js'

    export let data

    // console.log(data)
</script>

{#if data}
    <h1>{data.title}</h1>
    <p>{data.excerpt}</p>

    <RenderImage portableText={data.mainImage} />
    <PortableText
        value={data.body}
        components={{
            block: {
                h2: Headings,
                h3: Headings,
            },
            list: {
                bullet: BulletList,
                number: NumberList,
            },
            listItem: {
                bullet: ListItem,
                number: ListItem,
                normal: ListItem,
            },
            types: {
                customImage: RenderImage,
                youtube: RenderYoutube,
                twitter: RenderTwitter,
                customQuote: BlockQuote,
            },
            marks: {
                internalLink: InternalLink,
                link: ExternalLink,
            },
        }}
    />
    <RenderYoutube portableText={data.mainVideo} />
{:else}
    <h1>Sorry, couldn't find the post</h1>
{/if}

<style>
</style>
