import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import useRegister from './hooks/useRegister'

export default function Register() {
    const { inpUsername, inpPassword, inpRePassword, inpEmail, setInpUsername, setInpPassword, setInpRePassword, setInpEmail, handleRegister } = useRegister()
    return (
        <Stack sx={{ padding: '0px 50px', '& .MuiTextField-root': { marginBottom: '25px' } }}>
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
                type="password"
                value={inpPassword}
                onChange={(e) => setInpPassword(e.target.value)}
                size="small"
            />
            <TextField
                label="RePassword"
                variant="outlined"
                type="password"
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
            <Link style={{ marginBottom: "25px" }} href="#/login"> Back to login</Link>
            <Button variant='contained' onClick={() => handleRegister(inpUsername, inpPassword, inpEmail)}>Register</Button>
        </Stack>
    );
}