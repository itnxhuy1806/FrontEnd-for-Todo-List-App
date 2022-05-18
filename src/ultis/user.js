import jsCookie from "js-cookie";

export function login(accessToken,refreshToken){
    jsCookie.set('accessToken',accessToken)
    jsCookie.set('refreshToken',refreshToken)
}
export function logout(){
    jsCookie.remove('accessToken')
    jsCookie.remove('refreshToken')
}