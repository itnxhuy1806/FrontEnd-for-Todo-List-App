import { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './App.css'
import TaskList from "./TaskList";


function generateId(arr) {
  if (arr.length) return Math.max(...arr.map((ele) => ele.id)) + 1;
  return 1;
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [inpValue, setInpValue] = useState("");
  function changeInp(e) {
    setInpValue(e.target.value);
  }

  function handleAdd() {
    const newTasks = {
      id: generateId(tasks),
      checked: false,
      content: inpValue,
      editMode: false
    };
    setInpValue("")
    setTasks([...tasks, newTasks]);
  }
  function handleDelete(id) {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleUpdateChecked(id) {
    const newTasks = [...tasks].map((task) => {
      if (task.id === id) return { ...task, checked: !task.checked };
      return task;
    });
    setTasks(newTasks);
    console.log(tasks)
  }

  function handleUpdateContent(id, content) {
    const newTasks = [...tasks].map((task) => {
      if (task.id === id) return { ...task, editMode: !task.editMode, content };
      return task;
    });
    setTasks(newTasks);
  }
  return (
    <div className="App" style={{ margin: "100px", Width: "600px", border: "1px black solid" }}>
      <h1>TodoList</h1>
      <TextField
        label="Enter new task content"
        variant="outlined"
        type="text"
        value={inpValue}
        onChange={changeInp}
        size="small"
      />
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd} size="large" ></Button>
      <TaskList {...{ tasks, handleDelete, handleUpdateChecked, handleUpdateContent }} />
    </div>
  );
}

export default App;
