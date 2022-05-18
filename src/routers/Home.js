import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import * as API from "../ultis/api"

export default function Home() {

    const [inpValue, setInpValue] = useState("");
    const [todos, setTodos] = useState([]);
    const { getTodos, addTodo, deleteTodo, updateTodo } = API
    
    function thenGetTodos(response) {
        setTodos(response.data.data.sort((a, b) => a.id - b.id))
    }

    function thenAddTodo(response) {
        setInpValue("")
        getTodos(thenGetTodos)
    }

    function thenDeleteTodo(response) {
        getTodos(thenGetTodos)
    }

    function thenUpdateTodo(response) {
        console.log(response);
        getTodos(thenGetTodos)
    }

    function handleAdd(name) {
        addTodo(name, thenAddTodo)
    }

    function handleDelete(id) {
        deleteTodo(id, thenDeleteTodo)
    }

    function handleUpdate(id, name) {
        updateTodo(id, name, thenUpdateTodo)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getTodos(thenGetTodos) }, [])

    return (
        <>
            <h1>TodoList</h1>
            <TextField
                label="Enter new todo list name"
                variant="outlined"
                type="text"
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                size="small"
            />
            <Button variant="contained" onClick={() => handleAdd(inpValue)} size="large"><AddIcon /></Button>
            <TodoList {...{ todos, handleDelete, handleUpdate }} />
            <Link to="/login">Login</Link>
        </>
    )
}