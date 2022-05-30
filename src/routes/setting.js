import {AppLayout} from '../layouts/AppLayout';
import Setting from '../pages/Setting/Setting';

export const setting = {
  path: '',
  element: <AppLayout />,
  children: [
    {
      path: 'setting',
      element: <Setting />
    }
  ]
};
