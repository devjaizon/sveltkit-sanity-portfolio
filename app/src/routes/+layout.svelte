<script>
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import '$lib/config/app.css'

    onMount(() => {
        // goto('/blog')
        console.log(
            'Added a redirect in the main +layout.svelt so page always goes to the blog post'
        )
        goto('/blog/post/inteligencia-artificial-no-mundo-atual')
    })
</script>

<slot />

<style>
</style>
