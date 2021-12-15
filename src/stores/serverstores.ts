import { writable } from "svelte/store";

const ServerStore = (serverId?: string) => {
    console.log('init store')
    const { subscribe, set, update } = writable<{ server?: string }>({server: undefined});
    setTimeout(() => update(s => ({...s, server: serverId})), 500)
    return {
        subscribe,
    }
}

export default ServerStore;