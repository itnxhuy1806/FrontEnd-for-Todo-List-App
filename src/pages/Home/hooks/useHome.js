import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import * as API from '../../../ultis/api';
import validateInp from '../../../ultis/validdateInp';

export default function useHome() {
  const [inpValue, setInpValue] = useState('');
  const [todos, setTodos] = useState([]);
  const logged = useSelector(state => state.logged.value);
  const setting = useSelector(state => state.setting.value);
  const {getTodos, addTodo, deleteTodo, updateTodo} = API;

  let navigate = useNavigate();

  function thenGetTodos(response) {
    console.log(response);
    setTodos(response.data.data.sort((a, b) => a.id - b.id));
  }

  function thenAddTodo(response) {
    setInpValue('');
    getTodos(thenGetTodos);
  }

  function thenDeleteTodo(response) {
    getTodos(thenGetTodos);
  }

  function thenUpdateTodo(response) {
    getTodos(thenGetTodos);
  }

  function handleAdd(name) {
    const validate = validateInp(name);
    if (validate === true) addTodo(name, thenAddTodo);
    else alert(validate);
  }

  function handleDelete(id) {
    deleteTodo(id, thenDeleteTodo);
  }

  function handleUpdate(id, name) {
    const validate = validateInp(name);
    if (validate === true) updateTodo(id, name, thenUpdateTodo);
    else alert(validate);
  }

  useEffect(() => {
    getTodos(thenGetTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    logged,
    setting,
    todos,
    inpValue,
    setInpValue,
    navigate,
    handleAdd,
    handleDelete,
    handleUpdate
  };
}
