import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import * as API from "../ultis/api"
import * as USER from "../ultis/user"
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [inpUsername, setInpUsername] = useState("")
    const [inpPassword, setInpPassword] = useState("")
    let navigate = useNavigate();

    function handleLogin(username, password) {
        API.login({ username, password }, (response) => {
            if (response.data.success) {
                USER.login(response.data.data.accessToken, response.data.data.refreshToken)
                navigate('/', { replace: true, })
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(USER.logout, [])
    return (
        <Stack sx={{ padding: '0px 50px', '& .MuiTextField-root': { marginBottom: '25px' } }}>
            <h1>Login</h1>
            <TextField
                label="Username"
                variant="outlined"
                type="text"
                value={inpUsername}
                onChange={(e) => setInpUsername(e.target.value)}
                size="small"
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={inpPassword}
                onChange={(e) => setInpPassword(e.target.value)}
                size="small"
            />
            <Link style={{ marginBottom: "25px" }} href="#/register">Do you not have an account?</Link>
            <Button variant='contained' onClick={() => handleLogin(inpUsername, inpPassword)}>Login</Button>
        </Stack>
    );

}