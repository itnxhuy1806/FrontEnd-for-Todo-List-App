import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link'
import useTasks from "./useTasks";

export default function Tasks() {
    const { task, inpDescription, setInpDescription, handleUpdate, taskId } = useTasks()
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
            <Button variant="contained" onClick={() => handleUpdate(taskId, { description: inpDescription })}> Save </Button>
            <p><Link href={`/#/todos/${task.TodoListId}`}> Back</Link></p>
        </>
    )
}