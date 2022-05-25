import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import TaskList from "../../components/TaskList";
import useTodos from "./useTodos";

export default function Todos() {
    const { tasks, todo, inpValue, setInpValue, handleAdd, handleDelete, handleUpdate } = useTodos()

    return (
        <>
            <h1>{todo.name}</h1>
            <TextField
                label="Enter new task content"
                variant="outlined"
                type="text"
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                size="small"
            />
            <Button variant="contained" onClick={() => handleAdd(inpValue)} size="large"><AddIcon /></Button>
            <p><Link style={{ color: "blue" }} to="/">Back home</Link></p>
            <TaskList {...{ tasks, handleDelete, handleUpdate }} />
        </>
    )
}