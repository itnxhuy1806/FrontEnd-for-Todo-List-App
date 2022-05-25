import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setTrue } from '../../stores/features/loggedReducer'
import { useNavigate } from 'react-router-dom';
import * as API from "../../ultis/api"
import * as TOKEN from "../../ultis/token"


export default function useLogin() {
    const dispatch = useDispatch()
    const [inpUsername, setInpUsername] = useState("")
    const [inpPassword, setInpPassword] = useState("")
    let navigate = useNavigate();

    function handleLogin(username, password) {
        API.login({ username, password }, (response) => {
            if (response.data.success) {
                TOKEN.setToken(response.data.data.accessToken, response.data.data.refreshToken)
                dispatch(setTrue())
                navigate('/', { replace: true, })
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return {inpUsername, setInpUsername, inpPassword, setInpPassword, handleLogin}

}