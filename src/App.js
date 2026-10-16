// import './App.css';
// // import Getdata from './Getdata';
// // // import Getdata from './Getdata';
// // import Home_task from './Task/Home_task'; 
// // import Project from './Project';
// import axios from 'axios';
// import Crypto from './Crypto';
// import Popup from './Popup';
// import Colourchange from './Colourchange';
// import { useEffect } from 'react';
// import Login from './Login';


// function App() {

//   // useEffect(()=>{
//   //   axios.get("http://localhost:5000")
//   //   .then((res)=>console.log(res))
//   // } ,[])


//   return (
//     <div>
//        {/* <Crypto/>  */}
//       {/* <Popup/>
//       <Colourchange/> */}
//       <Login/>


//       {/*This is to test the git */}
//     </div>
//   );
// }

// export default App;
 

// import Parent from "./Parent";

// function App() {
//   const student = {
//     name: "Arun",
//     department: "MERN Stack"
//   };

//   return <Parent student={student} />;
// }

// export default App;

// import EmployeePage from "./EmployeePage";

// function App() {
//   const employee = {
//     name: "Priya",
//     role: "Frontend Developer",
//     salary: 30000,
//     skills: ["React", "JavaScript", "CSS"]
//   };

//   return <EmployeePage employee={employee} />;
// }

// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Dashboard from "./Dashboard";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);


//   return (
//     <Dashboard products={products} />
//   );
// }

// export default App;

import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import StudentList from './StudentList'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import StudentCard from './StudentCard'

function App() {

  const[data , setData] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users ")
    .then((res)=>{setData(res.data)})
  } ,[])

  function check()
  {
    if(data=="")
    {
      console.log("No students available")
    }
  }


  return (
    <div>

    <check/>

    <Paper elevation={24} style={{width : "45%" , height : "45vh" , marginLeft : "30%" , marginTop : "5%" , textAlign : "center"}}>
      <h1 style={{textAlign : "center"}}>Student Details application</h1>
      <TextField required label="UserName" variant="standard" helperText = "UserName is required" fullWidth /> 
       <TextField required type='password' label="Password" variant="standard" helperText = "Password is required" fullWidth />
       <Button variant='contained'>Sign Up</Button> 
    </Paper>
    <br/>

    <Button variant='contained'>Details</Button> <br/>
       <StudentList data={data}/>

       

    </div>
  )
}

export default App

//name ,username ,email ,address

//username , password ,required

//719256