import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Box";
import Link from "@mui/material/Box";
import Typography from "@mui/material/Box";
import { TextField } from "@mui/material";
// import Modal from '@mui/material/Modal'
import { useState, useEffect } from "react";
import Main from "../components/Main";
import Modal from "../components/Modal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearIcon from "@mui/icons-material/Clear";
import Container from '@mui/material/Container';


const Home = () => {
  const [adress, setAdress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdresses();
    setLoading(false);
  }, []);

  const baseUrl = "http://127.0.0.1:8020/pubinno/";

  const fetchAdresses = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setAdress(data);
        // console.log(data)
      });
  };

  const icon = <ArrowBackIosIcon />;
  const clearIcon = <ClearIcon />;

  return (

   
    
    <Box 
      sx={{display:'flex',flexDirection:'column',marginLeft:"15%"}}
    >
      {/* <Box
        component="main"
        sx={{
          p: 0,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      > */}
        {/* <Toolbar /> */}
        <Box sx={{ display: "flex", justifyContent: "start", p:5}}>
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            Locations
          </Link>
          <Link
            href="#"
            style={{ marginLeft: 40, textDecoration: "none", color: "grey" }}
          >
            User Accounts
          </Link>
          <Link
            href="#"
            style={{ marginLeft: 40, textDecoration: "none", color: "grey" }}
          >
            Info
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
            p:5
          }}
        >
          <Typography
            variant="h2"
            noWrap
            component="div"
            style={{ fontSize: "45px" }}
          >
            Locations
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <TextField
              sx={{ "& fieldset": { borderRadius: "30px", boxShadow: 8 } }}
              id="outlined-basic"
              placeholder="Search..."
              variant="outlined"
              style={{ width: 350 }}
              InputProps={{
                startAdornment: icon,
                endAdornment: clearIcon,
              }}
            />
            {/* <ArrowBackIosIcon/> */}

            {/* <Button variant="contained" color= "error"  style={{marginLeft:10}}>Contained</Button> */}
            <Modal fetchAdresses={fetchAdresses} />
          </Box>
        </Box>

        <Main adress={adress} loading={loading} setLoading={setLoading} />
      {/* </Box> */}
    </Box>
   

  );
};

export default Home;
