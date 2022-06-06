import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import * as API from '../../../ultis/api';
import validateInp from '../../../ultis/validdateInp';
import {useSelector} from 'react-redux';

export default function useTodos() {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState({});
  const [inpValue, setInpValue] = useState('');
  const {getTasks, addTask, deleteTask, updateTask} = API;
  const setting = useSelector(state => state.setting.value);
  let {todoId} = useParams();

  function thenGetTasks(response) {
    setTodo(response.data.data.todo);
    setTasks(response.data.data.tasks.sort((a, b) => a.id - b.id));
  }

  function thenAddTask(response) {
    setInpValue('');
    getTasks(todoId, thenGetTasks);
  }

  function thenDeleteTask(response) {
    getTasks(todoId, thenGetTasks);
  }

  function thenUpdateTask(response) {
    getTasks(todoId, thenGetTasks);
  }

  function handleAdd(content) {
    const validate = validateInp(content);
    if (validate === true) addTask({content, TodoListId: todoId}, thenAddTask);
    else alert(validate);
  }

  function handleDelete(id) {
    deleteTask(id, thenDeleteTask);
  }

  function handleUpdate(id, data) {
    if (data.content) {
      const validate = validateInp(data.content);
      if (validate === true) updateTask(id, data, thenUpdateTask);
      else alert(validate);
    } else updateTask(id, data, thenUpdateTask);
  }
  useEffect(() => {
    getTasks(todoId, thenGetTasks);
    // eslint-disable-next-line
  }, []);

  return {
    tasks,
    setTasks,
    todo,
    setTodo,
    inpValue,
    setInpValue,
    setting,
    handleAdd,
    handleDelete,
    handleUpdate
  };
}
