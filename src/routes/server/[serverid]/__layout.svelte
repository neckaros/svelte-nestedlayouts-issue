<script>
import { page } from '$app/stores';
import ServerStore from '../../../stores/serverstores';
import { setContext } from 'svelte';
    console.log('INIT LAYOUT SERVER', $page.params.serverid)
    setContext('server', ServerStore($page.params.serverid))

</script>

OK
<slot/>