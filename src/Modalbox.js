import {React,useState} from 'react';
import './ModalBox.css';
import gobi from './asset/accordino.jpeg';

function ModalBox() {

    const[modal,setModal]=useState(false)
    
  return (
    <>
    {/* <div>ModalBox</div>
    <button className='confirm' onClick={()=>setModal(true)}>Confirm</button>
   
    {modal?<div className='modal'>
        <spam>Are you sure,Do you want to continue ?</spam>
        <button className='ok' onClick={()=>setModal(false)}>OK</button>
    </div> : ""} */}

  <div className='modal' >
    <img src={gobi}/>
    <button className='cursor'>x</button>
    <h3 className='Head'>Secure all your devices</h3>
    <p style={{textAlign:"center"}}>Ensure your mobile phone,laptop and other devices are protected online</p>
    <button className='btn'>Purchase Premium</button>
  
  </div>
  </>
  )
}

export default ModalBox
