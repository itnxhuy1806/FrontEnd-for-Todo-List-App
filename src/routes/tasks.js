import {AppLayout} from '../layouts/AppLayout';
import Tasks from '../pages/Tasks/Tasks';

export const tasks = {
  path: '',
  element: <AppLayout />,
  children: [
    {
      path: 'todos/:todoId/tasks/:taskId',
      element: <Tasks />
    }
  ]
};
