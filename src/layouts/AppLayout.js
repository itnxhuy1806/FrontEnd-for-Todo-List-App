import {Outlet} from 'react-router-dom';
import MenuAppBar from '../components/MenuAppBar';

export function AppLayout() {
  return (
    <div>
      <MenuAppBar />
      <Outlet />
    </div>
  );
}
