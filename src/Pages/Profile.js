import React from 'react'


//PAGES
import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

function Profile() {
  return (
    <div className='backpage'>
      <div className='leftside'>
        <Sidenavbar />    
      </div>
      <div className='rightside'>
        <Topbar />

        <div className='pagecontent'>
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile