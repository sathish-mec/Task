import {React,useState} from 'react'

function Profile() {

    const[open,setOpen]=useState(0);

    function toggle(){
        setOpen(open==0 ? 1 : 0)
    }
  return (
    <div style={{backgroundColor :open ? "black" : "white",height:"100vh"}}>

        <span onClick={toggle}>{open ? "$" : "#"}</span>        
    </div>
  )
}

export default Profile