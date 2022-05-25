import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import * as API from "../../ultis/api"

export default function useTasks() {
    const [task, setTask] = useState({})
    const [inpDescription, setInpDescription] = useState("")
    let { id:taskId } = useParams();

    function thenGetTask(response) {
        setTask(response.data.data)
        setInpDescription(response.data.data.description)
    }

    function handleUpdate(id, data) {
        API.updateTask(id, data)
    }
    // eslint-disable-next-line
    useEffect(() => { API.getTask(taskId, thenGetTask) }, [])
    return { task,setTask, inpDescription, setInpDescription, handleUpdate, taskId }
}