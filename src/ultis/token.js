import jsCookie from "js-cookie";

export function setToken(accessToken, refreshToken) {
    jsCookie.set('accessToken', accessToken)
    jsCookie.set('refreshToken', refreshToken)
}

export function removeToken() {
    jsCookie.remove('accessToken')
    jsCookie.remove('refreshToken')
}