import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import TaskList from "../components/TaskList";
import * as API from "../ultis/api"

export default function Todos() {

    const [tasks, setTasks] = useState([]);
    const [inpValue, setInpValue] = useState("");
    const { getTasks, addTask, deleteTask, updateTask } = API
    let { TodoListId } = useParams();
    let navigate = useNavigate();


    function thenGetTasks(response) {
        console.log(response)
        setTasks(response.data.data.tasks.sort((a, b) => a.id - b.id))
    }

    function thenAddTask(response) {
        setInpValue("")
        console.log(response)
        getTasks(TodoListId, thenGetTasks)
    }

    function thenDeleteTask(response) {
        console.log(response)
        getTasks(TodoListId, thenGetTasks)
    }

    function thenUpdateTask(response) {
        console.log(response)
        getTasks(TodoListId, thenGetTasks)
    }

    function handleAdd(content) {
        addTask({ content, TodoListId }, thenAddTask)
    }

    function handleDelete(id) {
        deleteTask(id, thenDeleteTask)
    }

    function handleUpdate(id, data) {
        updateTask(id, { ...data, TodoListId }, thenUpdateTask)
    }
    // eslint-disable-next-line
    useEffect(() => { getTasks(TodoListId, thenGetTasks) }, [])

    return (
        <>
            <h1>TodoList {TodoListId}</h1>
            <TextField
                label="Enter new task content"
                variant="outlined"
                type="text"
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                size="small"
            />
            <Button variant="contained" onClick={() => handleAdd(inpValue)} size="large"><AddIcon /></Button>
            <br/>
            <Link to="/">Home</Link>
            <TaskList {...{ tasks, handleDelete, handleUpdate }} />
        </>
    );
}