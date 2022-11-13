import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"
import swal from 'sweetalert';

// Firebase
import '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const email = useRef();
  const password = useRef();
  const auth = getAuth();
  const Navigate = useNavigate();
  function userLogin(){

    const loginEmail = email.current.value;
    const loginPass = password.current.value;

    signInWithEmailAndPassword(auth, loginEmail, loginPass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Navigate("/dashboard");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Login error!", errorMessage, "warning");
    });
  }


  return (
    <div className='startapp'>
        <div className='userbox'>
            <div className='heading'>
                <span className='logo1'>RENT</span><span className='logo2'>LY</span>
            </div>

            <div className='userfield'>   
                <input type="text" placeholder="Email" className='userinput' ref={email}></input>       
                <input type="password" placeholder="New password" className='userinput' ref={password}></input>
                <button className='inputbtn' onClick={userLogin}>Login</button>
                <p>Don't have an account? <Link to="/register" style={{color:"var(--green1)", cursor:"pointer", textDecoration:"none"}}>Register</Link></p>
            </div>    
        </div>
    </div>
  )
}

export default Login