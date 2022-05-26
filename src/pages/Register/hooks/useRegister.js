import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setTrue } from '../../../stores/features/loggedReducer'
import * as API from "../../../ultis/api"
import * as TOKEN from "../../../ultis/token"
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
    const dispatch = useDispatch()
    const [inpUsername, setInpUsername] = useState("")
    const [inpPassword, setInpPassword] = useState("")
    const [inpRePassword, setInpRePassword] = useState("")
    const [inpEmail, setInpEmail] = useState("")
    let navigate = useNavigate();

    function handleRegister(username, password, email) {
        API.register({ username, password, email }, (response) => {
            if (response.data.success) {
                TOKEN.setToken(response.data.data.accessToken, response.data.data.refreshToken)
                dispatch(setTrue())
                navigate('/', { replace: true })
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return { inpUsername, inpPassword, inpRePassword, inpEmail, setInpUsername, setInpPassword, setInpRePassword, setInpEmail, handleRegister }
}