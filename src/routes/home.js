import {AppLayout} from '../layouts/AppLayout';
import Home from '../pages/Home/Home';

export const home = {
  path: '',
  element: <AppLayout />,
  children: [
    {
      path: '',
      element: <Home />
    }
  ]
};
