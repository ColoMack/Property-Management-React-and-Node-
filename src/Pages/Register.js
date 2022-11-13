import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"
import swal from 'sweetalert';


// For Firbase
import '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

function Register() {

  const fullname = useRef();
  const email = useRef();
  const phoneNo = useRef();
  const dob = useRef();
  const password = useRef();
  const Navigate = useNavigate();
  function signup(){

    const userfullname = fullname.current.value;
    const useremail = email.current.value;
    const userphoneNo = phoneNo.current.value;
    const userdob = dob.current.value;
    const userpass = password.current.value;
    const auth = getAuth();
    

    createUserWithEmailAndPassword(auth, useremail, userpass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const userID = user.uid;
      // ...

      // Add a new document in collection "usercred"
      setDoc(doc(db, "usercred", userID), {

        userId: userID,
        fullName: userfullname,
        userPhoneNo: userphoneNo,
        email: useremail,
        DOB: userdob

      }).then(()=>{

        Navigate("/dashboard");

      })

      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Register Error!", errorMessage, "warning");
      // ..
    });

  }

  return (
    <div className='startapp'>
        <div className='userbox'>
            <div className='heading'>
                <span className='logo1'>RENT</span><span className='logo2'>LY</span>
            </div>

            <div className='userfield'>
                <input type="text" placeholder="Fullname" className='userinput' ref={fullname}></input>
                <input type="text" placeholder="Email" className='userinput' ref={email}></input>
                <input type="text" placeholder="Phone number" className='userinput' ref={phoneNo}></input>
                <input type="text" placeholder="Date of Birth" className='userinput' onChange={(e) => console.log(e.target.value)} onFocus={() => (dob.current.type = "date")} onBlur={() => (dob.current.type = "text")} ref={dob}></input>
                <input type="password" placeholder="New password" className='userinput' ref={password}></input>
                <button className='inputbtn' onClick={signup}>Register</button>
                <p>Already have an account? <Link to="/" style={{color:"var(--green1)", cursor:"pointer", textDecoration:"none"}}>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register