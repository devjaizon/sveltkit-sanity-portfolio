<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'
    import { urlFor } from '../functions'

    export let portableText: BlockComponentProps

    $: ({
        alt,
        subtitle,
        asset: { _ref: ref },
    } = portableText.value || portableText)
</script>

<figure>
    <img loading="lazy" src={urlFor(ref).format('webp').url()} {alt} id={ref} />

    <figcaption>{subtitle}</figcaption>
</figure>

<style>
</style>
