import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import {makeStyles} from "@mui/styles";
import{useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';






export default function FormDialog({fetchAdresses}) {






  const [open, setOpen] = React.useState(false);
  const [formData,setFormData] = useState({
      name:"",
      adress:"",
      openning_time:"",
      closing_time:"",
      
    })
    const baseUrl = "http://127.0.0.1:8020/pubinno/";
  
    const addAdress = (newAdress) =>{ fetch(baseUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAdress),
    })
    .then(response => response.json())
    .then(newAdress => {
      console.log('Success:', newAdress);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleFormData = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData)
};


const handleSubmit = (e)=>{
    e.preventDefault();
    addAdress(formData);
    fetchAdresses(baseUrl)
    window.location.reload()
    handleClose();
 
  }



    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="contained" color= "error" style={{marginLeft:15,padding:10,marginTop:5}} onClick={handleClickOpen}>
        <AddIcon style={{marginRight:5}}/>
        NEW 
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "350px", 
        },
      },
    }}>
        <Box style={{ display: 'flex',justifyContent:'space-between'}}>
        <DialogTitle>Add New Locations</DialogTitle>
          <ClearIcon  onClick={handleClose} sx={{p:3,cursor:'pointer'}}/>
        </Box>  
        <DialogTitle>GENERAL</DialogTitle>

        <DialogContent style={{}}>
      <form >
      <Box style={{ display: 'flex',flexDirection:"column",justifyContent:'space-evenly'}}>
         
   

     <TextField 
    //  label="Search" 
    //  variant="outlined"
    placeholder="Search" 
     type="text"
     style={{marginBottom:10,width:"100%"}} 
     name="name"
     value={formData.name}
     onChange={handleFormData}
     />

   <TextField id="outlined-basic" 
    //  label="Adress" 
    //  variant="outlined" 
    placeholder="Adress" 
     type="text"
     name = "adress"
     style={{marginBottom:10}}
     onChange={handleFormData}
      />

<TextField id="outlined-basic" 
    //  label="Opening Time" 
    //  variant="outlined" 
    placeholder="Openning Time" 
     name="openning_time"
     type="time"
     style={{marginBottom:10}}
     onChange={handleFormData}
      />

<TextField id="outlined-basic" 
    //  label="Closing Time" 
    //  variant="outlined" 
    placeholder="Closing Time" 
     name="closing_time"
     type="time"
     style={{marginBottom:10}}
     onChange={handleFormData}
      />

<select name="timezone_offset" id="timezone-offset" class="span5" style={{width:300,height:'5vh'}}>
	<option value="-12:00">GMT + 03:00 Istanbul</option>
	<option value="-11:00">GMT +11:00 Midway Island, Samoa</option>
	<option value="-10:00">GMT +10:00 Hawaii</option>
	<option value="-09:50">GMT +9:30 Taiohae</option>
	<option value="-09:00">GMT +9:00 Alaska</option>

</select>
     </Box>
          {/* <Button onClick={handleSubmit}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
    <Box style={{ display: 'flex',justifyContent:'end'}}>
    <Button variant="contained" color= "error" style={{marginLeft:10,padding:10,marginTop:5}} onClick={handleSubmit}>
        
        Save 
      </Button>
      </Box>
     </form>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
