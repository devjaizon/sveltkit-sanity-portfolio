<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'
    import { client } from '../config'
    import { onMount } from 'svelte'

    export let portableText: BlockComponentProps

    let _type: String, slug: String

    const getPostFromLink = async (ref: String) => {
        const data = await client.fetch(
            `*[_id == '${ref}'][0]{
            _type,
            'slug':slug.current
        }`
        )

        if (data) {
            return data
        }
    }

    $: ({
        plainTextContent,
        value: {
            reference: { _ref: ref },
        },
    } = portableText)

    onMount(async () => {
        ;({ _type, slug } = await getPostFromLink(ref))
    })
</script>

{#if _type}
    <a href={`/blog/${_type}/${slug}`}>{plainTextContent}</a>
{:else}
    {plainTextContent}
{/if}

<style>
    a {
        color: green;
    }
</style>
