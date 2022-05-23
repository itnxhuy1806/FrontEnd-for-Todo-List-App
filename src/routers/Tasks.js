import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link'
import * as API from "../ultis/api"

export default function Tasks() {
    const [task, setTask] = useState({})
    const [inpDescription, setInpDescription] = useState("")
    let { TaskId } = useParams();

    function thenGetTask(response) {
        setTask(response.data.data)
        setInpDescription(response.data.data.description)
    }

    function handleUpdate(id, data) {
        API.updateTask(id, data)
    }
    // eslint-disable-next-line
    useEffect(() => { API.getTask(TaskId, thenGetTask) }, [])
    return (
        <>
            <h1>{task.content}</h1>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={inpDescription}
                onChange={(e) => setInpDescription(e.target.value)}
            />
            <p></p>
            <Button variant="contained" onClick={() => handleUpdate(TaskId, { description: inpDescription })}> Save </Button>
            <p><Link href={`/#/todos/${task.TodoListId}`}> Back</Link></p>
        </>
    )
}