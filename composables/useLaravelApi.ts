import type {UseFetchOptions} from 'nuxt/app'
import {defu} from 'defu'

export const useLaravelApi = <T>(url: string, options: UseFetchOptions<T> = {}) => {
    const runtimeConfig = useRuntimeConfig();
    const cookie = useCookie('XSRF-TOKEN');

    let headers: any = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Origin": "http://localhost:3000"
    };

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["cookie"])
        };
    }

    if (cookie.value) {
        headers = {
            ...headers,
            "X-XSRF-TOKEN": cookie.value as string,
        }
    }

    const defaults: UseFetchOptions<T> = {
        baseURL: runtimeConfig.public.serverEndpoint,
        key: url,
        watch: false,
        credentials: "include",
        headers,
    };

    const params = defu(options, defaults);

    return useFetch(url, params);
}