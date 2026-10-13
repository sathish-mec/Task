import React from 'react'
import { useState } from 'react'
import './Popup.css'

const Popup = () => {

    const[modal,setModal] = useState(false)
  return (
    <div>

        <div>ModalBox</div>
    <button className='confirm' onClick={()=>setModal(true)}>Delete</button>
   
    {modal?<div className='modal'>
        <spam>Are you sure , Do you want to delete ?</spam> <br/>
        <button className='ok' onClick={()=>setModal(false)}>Yes</button>
    </div> : ""}

    </div>
  )
}

export default Popup