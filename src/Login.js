import React from 'react'
import { useState , useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


const Login = () => {
  

  return (
    <div>

      
      
      <Paper elevation={7} style={{width : "40%" , textAlign : "center" , marginLeft : "30%" , marginTop : "10%" , height : "60vh"}}>
    <div style={{marginLeft : "15%" , display : "flex" , flexDirection : "column" , gap : "30px" ,   width : "70%"}}>

       

       <Box style = {{justifyContent : "center",marginLeft:"30%" , marginTop : "20px"}}
        sx={{
          width: 70,
          height: 70,
          borderRadius: 9,
          bgcolor: 'primary.main',
          '&:hover': {
          bgcolor: 'primary.dark'
          },
        }}
        
    
      >      <LockOpenOutlinedIcon style={{marginTop : "20px"}}/></Box>

      
      <TextField required label="UserName" variant="standard" helperText = "UserName is required" fullWidth /> 
      <TextField required type='password' label="Password" variant="standard" helperText = "Password is required" />
      <Button variant='contained'>Sign Up</Button> 

    
    </div>

    </Paper>
    </div>
  )
}

export default Login

//https://dummyjson.com/c/e2d7-5698-4370-bbf7
//379704