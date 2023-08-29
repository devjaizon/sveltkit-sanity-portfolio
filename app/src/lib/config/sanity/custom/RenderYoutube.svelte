<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({ url, title } = portableText.value || portableText)

    const getIDfromURL = (url: String) => {
        const regExp =
            /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/

        const match = url.match(regExp)

        if (match && match[2].length === 11) {
            return match[2]
        }

        console.log('The supplied URL is not a valid youtube URL')

        return ''
    }
</script>

<iframe
    src={`https://www.youtube.com/embed/${getIDfromURL(url)}`}
    {title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
/>

<style>
    iframe {
        @apply w-full aspect-[16/9] flex justify-center items-center;
    }
</style>
