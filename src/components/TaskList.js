import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {
  IconButton,
  TextField,
  Checkbox,
  ButtonGroup,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  ListItemIcon
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from './Dialog';

function Item(props) {
  const {
    id,
    content,
    checked,
    TodoListId,
    description,
    handleDelete,
    handleUpdate
  } = props;
  const [inpText, setInpText] = useState(content);
  const [editMode, setEditMode] = useState(false);
  const setting = useSelector(state => state.setting.value);
  let navigate = useNavigate();

  function handleEdit(id, data) {
    if (!editMode) setEditMode(true);
    else {
      setEditMode(false);
      handleUpdate(id, data);
    }
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <ButtonGroup>
          <IconButton
            color={setting.color}
            edge="end"
            onClick={() => handleEdit(id, {content: inpText})}
          >
            {editMode ? <SaveIcon /> : <EditIcon />}
          </IconButton>
          <AlertDialog
            {...{handleDelete, id, icon: <DeleteIcon color={setting.color} />}}
          />
        </ButtonGroup>
      }
    >
      <ListItemButton
        onClick={e => {
          if (e.target.tagName !== 'INPUT')
            navigate(`/todos/${TodoListId}/tasks/${id}`, {replace: true});
        }}
      >
        <ListItemIcon>
          <Checkbox
            checked={checked}
            color={setting.color}
            type="checkbox"
            onClick={() => handleUpdate(id, {checked: !checked})}
            size="large"
          />
        </ListItemIcon>
        <ListItemText
          primary={
            editMode ? (
              <TextField
                label="Enter new task content"
                variant="outlined"
                type="text"
                value={inpText}
                onChange={e => setInpText(e.target.value)}
                size="small"
              />
            ) : (
              content
            )
          }
          secondary={description}
        />
      </ListItemButton>
    </ListItem>
  );
}
export default function TaskList(props) {
  const {tasks, handleDelete, handleUpdate} = props;
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} {...task} {...{handleDelete, handleUpdate}} />
      ))}
    </List>
  );
}
