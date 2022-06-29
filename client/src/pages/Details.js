import React from 'react'
import { useLocation } from 'react-router-dom'
import UpdateModal from '../components/UpdateModal'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { browserHistory } from 'react-router'
// import {makeStyles} from "@mui/styles";
import CircularIndeterminate from './LoadingGif'






const Details = ({row}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true)
    
  
    

  };

 
  

  

  console.log(location.state.row)

  const id = location.state.row.id

 

  
  return (
    // <Box sx={{position:"relative",left: "300px",top:"100px",width:'150vh'}}>
      <Box sx={{display:'flex',flexDirection:'column',marginLeft:"15%"}}>
      <Box sx={{ display: 'flex',flexDirection:"column",alignItems:'center'}}>
    <TableContainer component={Paper} sx={{marginLeft:10}}>
    <UpdateModal open={open} setOpen={setOpen}  handleClickOpen={handleClickOpen} id={id}/>
    <Table sx={{ width:"100%"}} aria-label="custom pagination table">

      
        <TableBody  >
        <TableRow   >
                 
                 <TableCell  component="th" scope="row">
                   <h2>Name</h2>
                 </TableCell>
                 <TableCell  align="right">
                  <h2>Adress</h2> 
                 </TableCell>
               
                
        </TableRow>
                
                <TableRow sx={{cursor:"pointer"}} onClick={handleClickOpen}>
                 
                <TableCell align="left"> 
                 
                  {location.state.row.name}
              </TableCell>
              <TableCell style={{ }} align="right">
                {location.state.row.adress}
              </TableCell>
            
             
            </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
            <h3>Back</h3>
            <ArrowBackIosNewIcon sx={{cursor:'pointer'}} onClick={()=>navigate(-1)}/>
          </Box>
          </Box>

           
  )
}
export default Details