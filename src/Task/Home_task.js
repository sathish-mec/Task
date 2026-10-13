import { React , useState , useEffect} from 'react'
import axios from 'axios';
import {Routes,Route,Link  } from 'react-router-dom';
import './Home_task.css'
import Login_task from './Login_task'
import About_task from './About_task'
import Projects_task from './Projects_task'
import Contact_task from './Contact_task'
import Skills_task from './Skills_task'
import Accordion_task from './Accordion_task'

const Home_task = () => {
  return (
    

    <div className='container'>

      <div className='links'>

         <Link to ='/About_task' style={{ marginRight: '20px' ,marginLeft: '20px' }} className='aboutbtn' >About</Link>
         <Link to ='/Skills_task' style={{ marginRight: '20px' , marginLeft: '20px' }} className='skillsbtn' >Skills</Link>
         <Link to ='/Projects_task' style={{ marginRight: '20px' , marginLeft: '20px' }} className='projectsbtn' >Projects</Link>
         <Link to ='/Accordion_task' style={{ marginRight: '20px' , marginLeft: '20px' }} className='accordionbtn' >Accordion</Link>
         <Link to ='/Contact_task' style={{ marginRight: '20px' , marginLeft: '20px' }} className='contactbtn' >Contact</Link>
         <Link to ='/Login_task' style={{ marginRight: '20px' , marginLeft: '20px' }} className='loginbtn' >Login</Link>

      </div>

      <Routes>
        <Route path = '/Projects_task' element = {<Projects_task/>}></Route>
        <Route path = '/About_task' element = {<About_task/>}></Route>
        <Route path = '/Contact_task' element = {<Contact_task/>}></Route>
        <Route path = '/Skills_task' element = {<Skills_task/>}></Route>
        <Route path = '/Accordion_task' element = {<Accordion_task/>}></Route>
        <Route path = '/Login_task' element = {<Login_task/>}></Route>
     </Routes>

      

    </div>
  )
}

export default Home_task