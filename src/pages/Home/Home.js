import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import TodoList from '../../components/TodoList';
import useHome from './hooks/useHome';

export default function Home() {
  const {
    logged,
    setting,
    todos,
    inpValue,
    setInpValue,
    navigate,
    handleAdd,
    handleDelete,
    handleUpdate
  } = useHome();
  return (
    <>
      <p />
      {logged ? (
        <>
          <TextField
            label="Enter new todo list name"
            variant="outlined"
            type="text"
            value={inpValue}
            onChange={e => setInpValue(e.target.value)}
            size="small"
          />
          <Button
            variant="contained"
            size="large"
            onClick={() => handleAdd(inpValue)}
            color={setting.color}
          >
            <AddIcon />
          </Button>
          <TodoList {...{todos, handleDelete, handleUpdate}} />
        </>
      ) : (
        <>
          <h1> please! Login</h1>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/login', {replace: true})}
            color={setting.color}
          >
            Login
          </Button>
        </>
      )}
    </>
  );
}
