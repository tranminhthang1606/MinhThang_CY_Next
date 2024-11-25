import Cookies from "js-cookie";
export function useUtils() {
    function getCookieOnClient(name) {
        console.log(document.cookie);

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    async function getCookieOnServer(name) {
        const cookies = require("next/headers").cookies;
        const cookieStore = await cookies();
        return cookieStore.get(name);
    }

    async function getCookie(name) {
        if (typeof window === 'undefined') {
            return await getCookieOnServer(name)
        }
        return getCookieOnClient(name);
    }

    async function deleteCookie() {
        Cookies.remove("token", { path: "/" });
    }
    return {
        getCookieOnServer,
        getCookieOnClient,
        getCookie,
        deleteCookie
    }
}