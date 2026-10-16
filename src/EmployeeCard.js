import React from "react";
import EmployeeSkills from "./EmployeeSkills";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Badge from "@mui/material/Badge"; 
import IconButton from "@mui/material/IconButton";
import MailIcon from '@mui/icons-material/MailIcon'



function EmployeeCard({ employee }) {
  return (
    <div>
        <Paper elevation={24} style={{width : "25%" , height : "40vh" , marginLeft : "35%" , marginTop : "10%" , padding : "10px" , borderRadius : "10px" , backgroundColor : "skyblue"}}>
      <h2 style ={{textAlign : "center"}}>Employee Details</h2>
      <p >Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
      </Paper>

      <IconButton aria-label="show 4 unread messages">
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
    </IconButton>

    </div>
  );
}

export default EmployeeCard;