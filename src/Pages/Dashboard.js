import React from 'react'

import Sidenavbar from '../Components/Sidenavbar'
import Topbar from '../Components/Topbar'

function Dashboard() {
  return (
    <div className='backpage'>
      <div className='leftside'>
        <Sidenavbar />    
      </div>
      <div className='rightside'>
        <Topbar />

        <div className='pagecontent'>
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard