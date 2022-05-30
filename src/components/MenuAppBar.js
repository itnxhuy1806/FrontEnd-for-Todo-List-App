import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SideBar from './SideBar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useSelector, useDispatch} from 'react-redux';
import * as API from '../ultis/api';
import * as TOKEN from '../ultis/token';
import {setFalse} from '../stores/features/loggedReducer';

export default function MenuAppBar() {
  const logged = useSelector(state => state.logged.value);
  const setting = useSelector(state => state.setting.value);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    API.logout(response => {
      if (response.data.success) {
        TOKEN.removeToken();
        dispatch(setFalse());
      }
    });
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" color={setting.color}>
        <Toolbar>
          <SideBar />
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Todo List App
          </Typography>
          {logged && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
