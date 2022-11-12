import React from 'react'
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className='startapp'>
        <div className='userbox'>
            <div className='heading'>
                <span style={{fontSize:"200%"}}>Welcome to </span><span className='logo'>RENTLY</span>
            </div>

            <div className='userfield'>
                <input type="text" placeholder="Fullname" className='userinput'></input>
                <input type="text" placeholder="Email" className='userinput'></input>
                <input type="text" placeholder="Phone number" className='userinput'></input>
                <input type="date" placeholder="Date of Birth" className='userinput'></input>
                <input type="password" placeholder="New password" className='userinput'></input>
                <button className='inputbtn'>Register</button>
                <p>Already have an account? <Link to="/" style={{color:"var(--green1)", cursor:"pointer"}}>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register