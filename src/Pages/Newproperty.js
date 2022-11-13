import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

//PAGES
import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

//Firebase
import '../firebase'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

function Newproperty() {

    const Navigate = useNavigate();
    function back(){
        Navigate("/property")
    }

    const address = useRef();
    const type = useRef();
    const surfacearea = useRef();
    const saleprice = useRef();
    const rentprice = useRef();
    function submitDetails(){
        const customId = Math.trunc(((Math.random())*(Math.random()))*123456789012345);
        const fileId = customId.toString();

        const Propertyaddress = address.current.value;
        const Propertytype = type.current.value;
        const Propertysurfacearea = surfacearea.current.value;
        const Propertysaleprice = saleprice.current.value;
        const Propertyrentprice = rentprice.current.value;

        setDoc(doc(db, "propertyDB", fileId), {

            theFileId: fileId,
            Propertyaddress: Propertyaddress,
            Propertytype: Propertytype,
            Propertysurfacearea: Propertysurfacearea,
            Propertysaleprice: Propertysaleprice,
            Propertyrentprice: Propertyrentprice

        }).then(()=>{

            Navigate("/property");

        })
    }

  return (
    <div>
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
                    <input type="text" placeholder="Property Address" ref={address}></input>
                    <input type="text" placeholder="Property Type" ref={type}></input>
                    <input type="text" placeholder="Property Surface Area (squared ft)" ref={surfacearea}></input>
                    <input type="text" placeholder="Sale price" ref={saleprice}></input>
                    <input type="text" placeholder="Rental price" ref={rentprice}></input>
                    <button onClick={submitDetails} className='submitbtn'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newproperty