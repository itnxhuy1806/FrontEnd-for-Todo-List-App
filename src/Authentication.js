import {useRoutes} from 'react-router-dom';
import {home} from './routes/home';
import {todos} from './routes/todos';
import {tasks} from './routes/tasks';
import {setting} from './routes/setting';
import {notFound} from './routes/notFound';

export default function Authentication() {
  let element = useRoutes([home, tasks, todos, setting, notFound]);
  return element;
}
