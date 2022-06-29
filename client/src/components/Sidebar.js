import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { borderRadius, positions } from "@mui/system";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Main from "./Main";
import { Input, TextField, Button } from "@mui/material";
import { Link } from "@mui/material";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import DomainIcon from "@mui/icons-material/Domain";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";


const Sidebar = () => {
  return (
    <>
      {/* // <Container maxWidth="sm"> */}
      <Box sx={{}} style={{}}>
        {/* <CssBaseline sx={{width:35}} /> */}

        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{
            background:
              "linear-gradient(to bottom, rgba(196,48,66,1) 50%,rgba(240,240,240,0)50%",
          }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ padding: 20, marginTop: -25, cursor: "pointer" }}
            >
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                PUBINNO
               
              </Link>
            </Typography>
            <PersonIcon style={{ padding: 20, marginTop: -30 }} />
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Drawer
        variant="permanent"
        position="fixed"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      > */}
      <Toolbar />

      <Box
        sx={{
          width: "15%",
          height: "100vh",
          position: "fixed",
          boxShadow: "1px 5px #999999",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", overflowY: "auto" }}>
          <List>
            {/* {['Distributors', 'Customers', 'Search'].map((text, index) => (
              <ListItem key={text} disablePadding >
               
              
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <DomainIcon/> : <PeopleAltIcon/>} */}
            {/* <DomainIcon/>
                    < PeopleAltIcon/> */}
            {/* <DomainIcon/> */}

            {/* </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}

            // */}

            <ListItemButton>
              <ListItemIcon>
                <DomainIcon />

                <ListItemText>Distributors</ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon />

                <ListItemText>Customers</ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />

                <ListItemText>Search</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
      </Box>

      {/* </Drawer> */}
      {/* <Box style={{marginLeft:"30%"}}> */}

      {/* <Box component="main" sx={{p: 3 ,overflow:"auto",display:"flex",flexDirection:"column",width:"100vw"}}>
        <Toolbar />
        <Box sx={{ display: 'flex',justifyContent:'start',marginBottom:5}}>
        <Link href="#" style={{textDecoration:'none',color:'grey'}} >Locations</Link>
        <Link href="#" style={{marginLeft:40,textDecoration:'none',color:'grey'}}>User Accounts</Link>
        <Link href="#" style={{marginLeft:40,textDecoration:'none',color:'grey'}}>Info</Link>

        </Box>
        <Box sx={{ display: 'flex',justifyContent:'space-between',marginBottom:5}}>
        <Typography variant="h4" noWrap component="div" style={{display:'flex',marginBottom:25}}>
             Locations   
        </Typography>
        <Box sx={{ display: 'flex',justifyContent:'space-evenly',marginBottom:5,}}>
        <TextField className={classes.root} id="outlined-basic" label="Search" variant="outlined" style={{width:350}} />
        {/* <Button variant="contained" color= "error"  style={{marginLeft:10}}>Contained</Button> */}
      {/* <Modal fetchAdresses={fetchAdresses} /> */}
      {/* </Box>

        
        // </Box>

       
        <Main adress={adress}/>
       
    // </Box> 
    {/* <Home/> */}
      {/* </Box> */}
    </>
  );
};

export default Sidebar;
