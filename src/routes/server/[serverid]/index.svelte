<script>
import { getContext } from "svelte";


    const store = getContext('server')
</script>

{#if $store.server}
<a href='/server/{$store.server}/library/tata'>go to library</a>
{/if}