<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'

    export let portableText: BlockComponentProps

    $: ({
        plainTextContent,
        value: { url },
    } = portableText)
</script>

<a href={url} target="_blank">{plainTextContent}</a>

<style>
    a {
        color: greenyellow;
    }
</style>
