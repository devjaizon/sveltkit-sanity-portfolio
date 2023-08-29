<script lang="ts">
    import CustomHeading from '$lib/config/sanity/custom/Headings.svelte'
    import CustomImage from '$lib/config/sanity/custom/RenderImage.svelte'
    import CustomTwitter from '$lib/config/sanity/custom/RenderTwitter.svelte'
    import CustomYoutube from '$lib/config/sanity/custom/RenderYoutube.svelte'
    import { PortableText } from '@portabletext/svelte'
    import CustomQuote from '$lib/config/sanity/custom/BlockQuote.svelte'
    import CustomInternalLink from '$lib/config/sanity/custom/InternalLink.svelte'
    import CustomLink from '$lib/config/sanity/custom/ExternalLink.svelte'

    export let data

    // console.log(data)
</script>

{#if data}
    <h1>{data.title}</h1>
    <p>{data.excerpt}</p>
    <CustomImage portableText={data.mainImage} />

    {#if data.body && data.body.length}
        {#each data.body as block}
            <PortableText
                value={block}
                components={{
                    block: {
                        h2: CustomHeading,
                    },
                    types: {
                        customImage: CustomImage,
                        youtube: CustomYoutube,
                        twitter: CustomTwitter,
                        customQuote: CustomQuote,
                    },
                    marks: {
                        internalLink: CustomInternalLink,
                        link: CustomLink,
                    },
                }}
            />
        {/each}
    {/if}
    <CustomYoutube portableText={data.mainVideo} />
{:else}
    <h1>Sorry, couldn't find the post</h1>
{/if}

<style>
    blockquote {
        color: red;
    }
    a {
        text-decoration: none;
    }
</style>
