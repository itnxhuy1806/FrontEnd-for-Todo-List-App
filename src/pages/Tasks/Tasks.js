import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import useTasks from './hooks/useTasks';

export default function Tasks() {
  const {
    task,
    inpDescription,
    setting,
    setInpDescription,
    handleUpdate,
    taskId
  } = useTasks();
  return (
    <>
      <h1>{task.content}</h1>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={inpDescription}
        onChange={e => setInpDescription(e.target.value)}
      />
      <p></p>
      <Button
        color={setting.color}
        variant="contained"
        onClick={() => handleUpdate(taskId, {description: inpDescription})}
      >
        Save
      </Button>
      <p>
        <Link to={`/todos/${task.TodoListId}`} style={{color: setting.color}}>
          Back
        </Link>
      </p>
    </>
  );
}
