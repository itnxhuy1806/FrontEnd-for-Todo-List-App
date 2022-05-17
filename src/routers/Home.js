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

    function changeInp(e) {
        setInpValue(e.target.value);
    }

    function thenGetTodos(response) {
        console.log(response)
        setTodos(response.data.data.sort((a, b) => a.id - b.id))
    }

    function thenAddTodo(response) {
        console.log(response);
        setInpValue("")
        getTodos(thenGetTodos)
    }

    function thenDeleteTodo(response) {
        console.log(response);
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
            <TextField
                label="Enter new todo list name"
                variant="outlined"
                type="text"
                value={inpValue}
                onChange={changeInp}
                size="small"
            />
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => (handleAdd(inpValue))} size="large"></Button>
            <TodoList {...{ todos, handleDelete, handleUpdate }} />
            <Link to="/login">Login</Link>
        </>
    )
}