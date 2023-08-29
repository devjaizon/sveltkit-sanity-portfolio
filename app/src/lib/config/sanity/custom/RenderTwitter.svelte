<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    portableText.value.embed.startsWith('<blockquote') &&
        console.log(portableText.value.embed)

    $: ({ embed } = portableText.value)
</script>

{#if embed && embed.length}
    <div class="flex justify-center items-center">
        {#if embed.startsWith('<blockquote')}
            <!-- content here -->
            {@html embed}
        {:else}
            <blockquote class="twitter-tweet">
                <a href={embed}>{' '} </a>
            </blockquote>
        {/if}
        <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
        ></script>
    </div>
{/if}

<style>
</style>
