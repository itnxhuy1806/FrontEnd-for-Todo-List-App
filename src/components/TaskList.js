
import { useState } from "react";
import { IconButton, TextField, Checkbox, ButtonGroup, List, ListItemText, ListItemButton, ListItem, ListItemIcon } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from "./Dialog";


function Item(props) {
  const { id, checked, content, editMode, handleDelete, handleUpdateChecked, handleUpdateContent } = props;
  const [inpEditValue, setInpEditValue] = useState(content)
  function changeEditValue(e) {
    setInpEditValue(e.target.value);
  }
  let iconButton = <EditIcon />
  let listTextItem = <ListItemText primary={content} />
  if (editMode) {
    iconButton = <SaveIcon />
    listTextItem = <ListItemText>
      <TextField
        label="Enter task content"
        variant="outlined"
        type="text"
        value={inpEditValue}
        onChange={changeEditValue}
        size="small"
      />
    </ListItemText>
  }
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <ButtonGroup>
          <IconButton edge="end" onClick={() => handleUpdateContent(id, inpEditValue)}>{iconButton}</IconButton>
          <AlertDialog {...{ handleDelete, id, icon: <DeleteIcon /> }} />
        </ButtonGroup>
      }>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={checked} type="checkbox" onClick={() => handleUpdateChecked(id)} size="large" />
        </ListItemIcon>
        {listTextItem}
      </ListItemButton>
    </ListItem>
  )
}
export default function TaskList(props) {
  const { tasks, handleDelete, handleUpdateChecked, handleUpdateContent } = props
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} {...task} {...{ handleDelete, handleUpdateChecked, handleUpdateContent }} />
      ))}
    </List>
  )
}