<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({ _key } = portableText.value)
</script>

{#if portableText}
    <li id={_key}><slot /></li>
{/if}
