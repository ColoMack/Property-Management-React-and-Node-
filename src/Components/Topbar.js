import React from 'react'
import {GoSearch} from 'react-icons/go'

function Topbar() {
  return (
    <div className='topbarcont'>
      <div className='searchcont'>
        <div className='searchicondiv'><GoSearch/></div>
        <div className='searchinput'>
          <input type="text" placeholder="Search something here"></input>
        </div>
      </div>
    </div>
  )
}

export default Topbar