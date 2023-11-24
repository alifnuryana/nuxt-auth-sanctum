import {useAuthStore} from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();

    if (auth.isLoggedIn) {
        return navigateTo('/dashboard', {replace: true})
    }
})