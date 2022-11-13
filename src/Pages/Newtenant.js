import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

//PAGES
import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

//Firebase
import '../firebase'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

function Newtenant() {

    const Navigate = useNavigate();
    function back(){
        Navigate("/tenant")
    }
    
    const fullname = useRef();
    const nationalId = useRef();
    const phoneNo = useRef();
    const email = useRef();
    function submitDetails(){
        const customId = Math.trunc(((Math.random())*(Math.random()))*123456789012345);
        const fileId = customId.toString();

        const tenantname = fullname.current.value;
        const tenantnationalId = nationalId.current.value;
        const tenantPhoneNo = phoneNo.current.value;
        const tenantemail = email.current.value;
        

        setDoc(doc(db, "tenantDB", fileId), {

            theFileId: fileId,
            Tenantname: tenantname,
            TenantNationalID: tenantnationalId,
            TenantPhone: tenantPhoneNo,
            TenantEmail: tenantemail 

        }).then(()=>{

            Navigate("/tenant");

        })
    }

    return (
        <div className='backpage'>
            <div className='leftside'>
                <Sidenavbar />    
            </div>
            <div className='rightside'>
                <Topbar />

                <div className='pagecontent'>
                    <div className='topheading'>
                        <h1>Add a property</h1>
                        <button className='button1' onClick={back}>Back</button>
                    </div>
            
                    <div className='contentbox'>
                        <div>
                            <p>Fill the details bellow:</p>
                        </div>

                        <div className='propertyInput'>
                            <input type="text" placeholder="Tenant's Fullname" ref={fullname}></input>
                            <input type="text" placeholder="Tenant's National ID" ref={nationalId}></input>
                            <input type="text" placeholder="Tenant's Phone Number" ref={phoneNo}></input>
                            <input type="text" placeholder="Tenant's Email" ref={email}></input>
                            <button onClick={submitDetails} className='submitbtn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newtenant