import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import TaskList from "../components/TaskList";
import * as API from "../ultis/api"

export default function Todos() {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState({});
    const [inpValue, setInpValue] = useState("");
    const { getTasks, addTask, deleteTask, updateTask } = API
    let { TodoListId } = useParams();


    function thenGetTasks(response) {
        setTodo(response.data.data.todo)
        setTasks(response.data.data.tasks.sort((a, b) => a.id - b.id))
    }

    function thenAddTask(response) {
        setInpValue("")
        getTasks(TodoListId, thenGetTasks)
    }

    function thenDeleteTask(response) {
        getTasks(TodoListId, thenGetTasks)
    }

    function thenUpdateTask(response) {
        getTasks(TodoListId, thenGetTasks)
    }

    function handleAdd(content) {
        addTask({ content, TodoListId }, thenAddTask)
    }

    function handleDelete(id) {
        deleteTask(id, thenDeleteTask)
    }

    function handleUpdate(id, data) {
        updateTask(id, data, thenUpdateTask)
    }
    // eslint-disable-next-line
    useEffect(() => { getTasks(TodoListId, thenGetTasks) }, [])

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