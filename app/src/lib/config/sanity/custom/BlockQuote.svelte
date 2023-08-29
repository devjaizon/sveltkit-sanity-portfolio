<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({ font, text, fontUrl } = portableText.value)
</script>

<blockquote cite={fontUrl && fontUrl}>
    <p>
        {text}
    </p>

    <footer>
        —<span>
            {#if fontUrl}
                <a href={fontUrl}>{font}</a>
            {:else}
                {font}
            {/if}
        </span>
    </footer>
</blockquote>

<style lang="scss">
    blockquote {
        @apply m-0 py-6 px-12;

        p {
            @apply italic before:content-['\201C'] after:content-['\201D'];
        }
    }

    footer {
        span {
            @apply ml-2 font-bold;
        }
    }
</style>
