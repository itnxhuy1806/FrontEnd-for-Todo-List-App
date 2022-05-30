import {AppLayout} from '../layouts/AppLayout';
import Todos from '../pages/Todos/Todos';

export const todos = {
  path: '',
  element: <AppLayout />,
  children: [
    {
      path: 'todos/:todoId',
      params: {
        teamId: 'todoId'
      },
      element: <Todos />
    }
  ]
};
