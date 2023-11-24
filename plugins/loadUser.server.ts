import {useAuthStore} from "~/stores/authStore";

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore();

    if (!auth.isLoggedIn) {
        await auth.fetchUser();
    }
})
