
import { useState } from "react";
import { IconButton, TextField, Checkbox, ButtonGroup, List, ListItemText, ListItemButton, ListItem, ListItemIcon } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from "./Dialog";


function Item(props) {
  const { id, content, checked, handleDelete, handleUpdate } = props;
  const [inpText, setInpText] = useState(content)
  const [editMode, setEditMode] = useState(false)

  function handleEdit(id, data) {
    if (!editMode)
      setEditMode(true)
    else {
      setEditMode(false)
      handleUpdate(id, data)
    }
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <ButtonGroup>
          <IconButton edge="end" onClick={() => handleEdit(id, { content: inpText })}>{editMode ? <SaveIcon /> : <EditIcon />}</IconButton>
          <AlertDialog {...{ handleDelete, id, icon: <DeleteIcon /> }} />
        </ButtonGroup>
      }>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={checked} type="checkbox" onClick={() => handleUpdate(id, { checked: !checked })} size="large" />
        </ListItemIcon>
        <ListItemText primary={
          editMode ?
            <TextField
              label="Enter new task content"
              variant="outlined"
              type="text"
              value={inpText}
              onChange={(e) => setInpText(e.target.value)}
              size="small"
            />
            : content
        } />
      </ListItemButton>
    </ListItem>
  )
}
export default function TaskList(props) {
  const { tasks, handleDelete, handleUpdate} = props
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} {...task} {...{ handleDelete, handleUpdate }} />
      ))}
    </List>
  )
}