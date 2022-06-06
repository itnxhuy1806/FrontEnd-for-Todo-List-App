import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import store from '../stores/store';
import theme from '../ultis/theme';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setTrue} from '../../src/stores/features/loggedReducer';
import {useEffect} from 'react';

function Page(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    if (props.logged === true) {
      dispatch(setTrue());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.children;
}
export function RenderOnePage(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path="" element={<Page {...props} />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}
