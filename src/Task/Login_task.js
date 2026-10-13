import React from 'react'
import './Login_task.css'

const Login_task = () => {
  return (
    <div className='formbox'>

      <form className='forminput'>
        <input type='text' placeholder='Enter UserName'></input><br/>
        <input type='password' placeholder='Password'></input><br/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Login_task