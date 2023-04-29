import * as React from 'react';
import { useContext } from 'react';
// import { UserContext } from '../AuthContext';
// import { AuthContext } from '../AuthContext';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  // const { user } = useContext(UserContext);
  // console.log(user.user_id)
  // console.log(user)

  // const userPresent = localStorage.getItem("user");
  // console.log("userpresent", userPresent);

  // const { isLoggedIn, userID } = useContext(AuthContext);

  // if (isLoggedIn) {
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
            
            {/* <p>Welcome, {userID}!</p> */}
            <Button color="inherit" href="/logout">Logout</Button>          
          </Toolbar>
        </AppBar>
      </Box>
    );
  // } else {
  //   // Render the logged-out navbar
  //   return (
  //     <Box sx={{ flexGrow: 1 }}>
  //       <AppBar position="static">
  //         <Toolbar>
  //           <IconButton
  //             size="large"
  //             edge="start"
  //             color="inherit"
  //             aria-label="menu"
  //             sx={{ mr: 2 }}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //             Bookie
  //           </Typography>
            
  //           <Button color="inherit" href="/login">Login</Button>
  //           <Button color="inherit" href="/register">Register</Button>   
  //         </Toolbar>
  //       </AppBar>
  //     </Box>
    // );
  }

  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <IconButton
  //           size="large"
  //           edge="start"
  //           color="inherit"
  //           aria-label="menu"
  //           sx={{ mr: 2 }}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //           Bookie
  //         </Typography>
  //         {user ? (
  //           <>
  //             <p>Welcome, {user.user_id}!</p>
  //             <Button color="inherit" href="/logout">Logout</Button>
  //           </>
  //         ) : (
  //           <>
  //             <Button color="inherit" href="/login">Login</Button>
  //             <Button color="inherit" href="/register">Register</Button>
  //           </>
  //         )}
          
          
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // );
// }



