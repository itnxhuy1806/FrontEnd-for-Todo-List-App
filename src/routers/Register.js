import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function Register() {
    const [inpUsername, setInpUsername] = useState("")
    const [inpPassword, setInpPassword] = useState("")
    const [inpRePassword, setInpRePassword] = useState("")
    const [inpEmail, setInpEmail] = useState("")
    return (
        <Stack sx={{ padding: '0px 50px', '& *': { marginBottom: '25px' } }}>
            <h1>Register</h1>
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
                type="text"
                value={inpPassword}
                onChange={(e) => setInpPassword(e.target.value)}
                size="small"
            />
            <TextField
                label="RePassword"
                variant="outlined"
                type="text"
                value={inpRePassword}
                onChange={(e) => setInpRePassword(e.target.value)}
                size="small"
            />
            <TextField
                label="Email"
                variant="outlined"
                type="text"
                value={inpEmail}
                onChange={(e) => setInpEmail(e.target.value)}
                size="small"
            />
            <div><Link href="#/login"> Back to login</Link></div>
            <Button variant='contained'>Login</Button>
        </Stack>
    );
}