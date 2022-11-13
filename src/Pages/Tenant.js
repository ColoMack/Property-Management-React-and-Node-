import React from 'react'

//PAGES
import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

function Tenant() {
  return (
    <div className='backpage'>
      <div className='leftside'>
        <Sidenavbar />    
      </div>
      <div className='rightside'>
        <Topbar />

        <div className='pagecontent'>
          <h1>Tenants</h1>
        </div>
      </div>
    </div>
  )
}

export default Tenant