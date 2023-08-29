<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({ _key } = portableText.value)
</script>

{#if portableText}
    <ol id={_key}>
        <slot />
    </ol>
{/if}

<style>
</style>
