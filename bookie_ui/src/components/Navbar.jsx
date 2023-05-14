import * as React from 'react';
import { useAuth } from '../Contexts/AuthContext';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  // eslint-disable-next-line
  const {authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth();

  setIsLoggedIn(localStorage.getItem('access_token') ? true : false);
  setAuthUser({
    Name: localStorage.getItem('user_name'),
  });

  // console.log(isLoggedIn)

  // Render the logged-in navbar with the retrieved username
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookie
          </Typography>
          
          {isLoggedIn? 
            ( 
              <>
                <span>Username: {authUser.Name}</span>
                <Button color="inherit" href="/logout">Logout</Button>
              </>
            ) 
          : 
            (
              <>
                <Button color="inherit" href="/login">Login</Button><></>
                <Button color="inherit" href="/register">Register</Button>
              </>  
            )
          }
                    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
