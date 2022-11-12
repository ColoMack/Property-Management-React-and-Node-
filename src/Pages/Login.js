import React from 'react'
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className='startapp'>
        <div className='userbox'>
            <div className='heading'>
                <span style={{fontSize:"200%"}}>Welcome Back to </span><span className='logo'>RENTLY</span>
            </div>

            <div className='userfield'>   
                <input type="text" placeholder="Email" className='userinput'></input>       
                <input type="password" placeholder="New password" className='userinput'></input>
                <button className='inputbtn'>Login</button>
                <p>Don't have an account? <Link to="/register" style={{color:"var(--green1)", cursor:"pointer"}}>Register</Link></p>
            </div>    
        </div>
    </div>
  )
}

export default Login