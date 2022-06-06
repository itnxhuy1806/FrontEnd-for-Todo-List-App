import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import * as API from '../../../ultis/api';

export default function useTasks() {
  const [task, setTask] = useState({});
  const [inpDescription, setInpDescription] = useState('');
  const setting = useSelector(state => state.setting.value);
  let {taskId} = useParams();

  function thenGetTask(response) {
    setTask(response.data.data);
    setInpDescription(response.data.data.description);
  }

  function handleUpdate(id, data) {
    API.updateTask(id, data);
  }
  useEffect(() => {
    API.getTask(taskId, thenGetTask);
    // eslint-disable-next-line
  }, []);
  return {
    task,
    setTask,
    setting,
    inpDescription,
    setInpDescription,
    handleUpdate,
    taskId
  };
}
