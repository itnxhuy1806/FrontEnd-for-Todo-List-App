import {useRoutes} from 'react-router-dom';
import {home} from './routes/home';
import {login} from './routes/login';
import {notFound} from './routes/notFound';
import {register} from './routes/register';
import {setting} from './routes/setting';

export default function NoAuthentication() {
  return useRoutes([home, login, register, setting, notFound]);
}
