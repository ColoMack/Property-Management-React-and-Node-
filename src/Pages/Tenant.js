import React from 'react'
import { useNavigate } from 'react-router-dom'

//PAGES
import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

function Tenant() {

  const Navigate = useNavigate();
  function newEntry(){
      Navigate("/newtenant")
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
            <h1>Tenants</h1>
            <button className='button1' onClick={newEntry}>New Tenant</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tenant