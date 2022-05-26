import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as API from "../../../ultis/api"

export default function useTodos() {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState({});
    const [inpValue, setInpValue] = useState("");
    const { getTasks, addTask, deleteTask, updateTask } = API
    let { id: todoId } = useParams();


    function thenGetTasks(response) {
        setTodo(response.data.data.todo)
        setTasks(response.data.data.tasks.sort((a, b) => a.id - b.id))
    }

    function thenAddTask(response) {
        setInpValue("")
        getTasks(todoId, thenGetTasks)
    }

    function thenDeleteTask(response) {
        getTasks(todoId, thenGetTasks)
    }

    function thenUpdateTask(response) {
        getTasks(todoId, thenGetTasks)
    }

    function handleAdd(content) {
        addTask({ content, TodoListId: todoId }, thenAddTask)
    }

    function handleDelete(id) {
        deleteTask(id, thenDeleteTask)
    }

    function handleUpdate(id, data) {
        updateTask(id, data, thenUpdateTask)
    }
    // eslint-disable-next-line
    useEffect(() => { getTasks(todoId, thenGetTasks) }, [])

    return { tasks, setTasks, todo, setTodo, inpValue, setInpValue, handleAdd, handleDelete, handleUpdate }
}