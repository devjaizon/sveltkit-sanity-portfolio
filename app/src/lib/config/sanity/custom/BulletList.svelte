<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps
</script>

{#if portableText}
    <ul>
        <slot />
    </ul>
{/if}

<style>
</style>
