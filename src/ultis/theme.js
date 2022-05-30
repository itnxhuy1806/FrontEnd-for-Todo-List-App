import {red, purple, blue, green} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    // mode: 'light',
    blue: {
      main: blue[700],
      contrastText: '#ffffff'
    },
    red: {
      main: red[700],
      contrastText: '#ffffff'
    },
    pupple: {
      main: purple[700],
      contrastText: '#ffffff'
    },
    green: {
      main: green[700],
      contrastText: '#ffffff'
    }
  }
});

export default theme;
