<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({ _key, children, style } = portableText.value)

    $: heading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(style!)

    $: anchorId = `heading-${_key}`
</script>

<!-- If preceded by heading, have a higher margin top -->
{#if heading}
    <svelte:element this={style} id={anchorId} name={anchorId}>
        <slot>{children[0].text}</slot>
    </svelte:element>
{/if}

<style>
</style>
