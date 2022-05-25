import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import TodoList from "../../components/TodoList";
import useHome from "./useHome";

export default function Home() {
    const { logged, todos, inpValue, setInpValue, navigate, handleAdd, handleDelete, handleUpdate, handleLogout } = useHome()
    return (
        <>
            <h1>TodoList</h1>
            {logged
                ? <>
                    <TextField
                        label="Enter new todo list name"
                        variant="outlined"
                        type="text"
                        value={inpValue}
                        onChange={(e) => setInpValue(e.target.value)}
                        size="small"
                    />
                    <Button variant="contained" size="large" onClick={() => handleAdd(inpValue)} ><AddIcon /></Button>
                    <TodoList {...{ todos, handleDelete, handleUpdate }} />
                    <Button variant="contained" size="large" onClick={() => navigate('/setting')}>Setting</Button>
                    <Button variant="contained" size="large" onClick={handleLogout}>Logout</Button>
                </>
                : <Button variant="contained" size="large" onClick={() => navigate('/login', { replace: true })}>Login</Button>
            }
        </>
    )
}