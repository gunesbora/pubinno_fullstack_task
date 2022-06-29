import React from 'react'
// import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';



const Navbar = () => {
   





  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"linear-gradient(to bottom, rgba(196,48,66,1) 50%,rgba(240,240,240,0)50%",height:"25vh"}} >
        

        <Toolbar style={{}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,marginTop:2 }}>
            PUBINNO
          </Typography>

          {/* <Button color="inherit">Login</Button> */}
            <AccountCircle />
        </Toolbar>
        <Toolbar style={{}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:"black",padding:10,marginLeft:10}}>
           <p style={{fontWeight:"bold"}}>Pubinno ><span style={{fontWeight:"normal"}}> Pubinno Test   </span> </p>
            



          </Typography>
          </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar