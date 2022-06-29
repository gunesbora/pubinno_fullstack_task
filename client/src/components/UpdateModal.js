import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import {makeStyles} from "@mui/styles";
import{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';









export default function FormDialog({key,open,setOpen,handleClickOpen,id}) {

// const useStyles = makeStyles(() => ({
//         paper: { minWidth: "50px" },
//       }));

      
//   const classes =useStyles();


let navigate = useNavigate()
console.log(key)




//    const [open, setOpen] = React.useState(false);
  const [formData,setFormData] = useState({
      name:"",
      adress:"",
      openning_time:"",
      closing_time:"",
      
    })

    
    const baseUrl = `http://127.0.0.1:8020/pubinno/${id}`

       
    const getMainData = () => {
        fetch("http://127.0.0.1:8020/pubinno/")
        .then((res)=>res.json())
        .then((data)=>{
            setFormData(data)
            
          
            
        })
    };



    
    const getUpdate = () => {
        fetch(baseUrl)
        .then((res)=>res.json())
        .then((data)=>{
            setFormData(data)
            console.log(data)
            // console.log(id)
            
        })
    };

    const putAdress=(added)=>{
        fetch(baseUrl ,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
           added
          )
        }).then((response) => {
          response.json().then((response) => {
            console.log(response);
          })
        }).catch(err => {
          console.error(err)
        })
    }



    const deleteData = () => {
      fetch(baseUrl, {
        method: "DELETE",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => console.log(data));
        navigate('/')
    };


    useEffect(() => {
        getUpdate();
        console.log(formData)
            
         
       },[])
       
       
       



  const handleFormData = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
    console.log(formData)
};


const handleSubmit = (e)=>{
    e.preventDefault();
    putAdress(formData);
    getMainData()
    navigate('/')

   
    handleClose();
    // setFormData({
    //     name:"",
    //     adress:"",
    //     openning_time:"",
    //     closing_time:"",

    // })
  }


  const handleDelete = (e)=>{
    e.preventDefault();
   
    deleteData();
    getUpdate()
    navigate('/')

   
    handleClose();
    // setFormData({
    //     name:"",
    //     adress:"",
    //     openning_time:"",
    //     closing_time:"",

    // })
  }



    

 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
       
      
      {/* <Button variant="contained" color= "error" style={{marginLeft:10}} onClick={handleClickOpen}>
        NEW
      </Button> */}
      <Dialog open={open} onClose={handleClose} sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "350px", 
        },
      },
    }}>

    <Box style={{ display: 'flex',justifyContent:'space-between'}}>
        <DialogTitle>Update New Locations</DialogTitle>
        <ClearIcon  onClick={handleClose} sx={{p:3,cursor:'pointer'}}/>
     </Box>
        <DialogTitle>GENERAL</DialogTitle>

        <DialogContent style={{}}>
      <form >
      <Box style={{ display: 'flex',flexDirection:"column",justifyContent:'space-evenly'}}>
         
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}

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
     value={formData.adress}
     style={{marginBottom:10}}
     onChange={handleFormData}
      />

<TextField id="outlined-basic" 
    //  label="Opening Time" 
    //  variant="outlined" 
     name="openning_time"
     value={formData.openning_time}
     type="time"
     style={{marginBottom:10}}
     onChange={handleFormData}
      />

<TextField id="outlined-basic" 
    //  label="Closing Time" 
    //  variant="outlined" 
     name="closing_time"
     value={formData.closing_time}
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
          {/* <Button onClick={handleSubmit}>Update</Button>
          <Button onClick={handleDelete}>Delete</Button> */}
    <Box sx={{ display: 'flex',justifyContent:'space-between',marginTop:2}}>
      <Button onClick={handleSubmit} variant="contained" color= "success" style={{marginLeft:10,padding:10,marginTop:5}} >
        
        Update
      </Button>

      <Button onClick={()=>deleteData()} variant="contained" color= "error" style={{marginLeft:10,padding:10,marginTop:5}} >
        
        Delete
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

