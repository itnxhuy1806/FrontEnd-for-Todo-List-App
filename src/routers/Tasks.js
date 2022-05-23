import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TaskList from "../components/TaskList";
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

    useEffect(() => { API.getTask(TaskId, thenGetTask) }, [])
    return (
        <>
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
        </>
    )
}