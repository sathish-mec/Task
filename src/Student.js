import React from "react";
import './Student.css'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Student({ student }) {
  return (
    <div>
        <Paper elevation = {24} style={{width : "25%" , height : "40vh" , marginLeft : "35%" , marginTop : "10%" , padding : "10px" , borderRadius : "10px" , backgroundColor : "grey"}} >
      <h2 style ={{padding : "10px" , textAlign : "center"}}>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>

      </Paper>
    </div>
  );
}

export default Student;