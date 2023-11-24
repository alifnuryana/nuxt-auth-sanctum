type User = {
    id: number;
    name: string;
    email: string;
}

type Credentials = {
    email: string;
    password: string;
}

type RegisterInfo = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => user.value !== null);

    async function fetchUser() {
        const {data} = await useLaravelApi<User>('/api/user');

        user.value = data.value;
    }

    async function register(registerInfo: RegisterInfo) {
        const registerResponse = await useLaravelApi('/register', {
            method: "POST",
            body: registerInfo,
        })

        return registerResponse;
    }

    async function logout() {
        await useLaravelApi('/sanctum/csrf-cookie');
        user.value = null;
        await useLaravelApi('/logout', {method: "POST"});
        navigateTo('/login')
    }

    async function login(credentials: Credentials) {
        await useLaravelApi('/sanctum/csrf-cookie');

        const loginResponse = await useLaravelApi('/login', {
            method: "POST",
            body: credentials,
        })

        await fetchUser();

        return loginResponse;
    }

    return {
        user,
        login,
        logout,
        isLoggedIn,
        fetchUser,
        register,
    };
})