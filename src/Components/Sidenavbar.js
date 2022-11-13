import React from 'react'
import { Link } from 'react-router-dom';

function Sidenavbar() {
  return (
    <div className='sidebarcont'>
      <div className='pageLogo'>
        <span className='logoB1'>RENT</span><span className='logoB2'>LY</span>
      </div>
      <div className='navbox'>
        <div className='navheading'>
          <span>Main Menu</span>
        </div>
        <div className='navcontent'>
          <ul>
            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <Link to="/dashboard" className='actualdiv'>Dashboard</Link>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <Link to="/property" className='actualdiv'>Property</Link>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <Link to="/tenant" className='actualdiv'>Tenants</Link>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <Link to="/profile" className='actualdiv'>Profile</Link>
              </div>
            </li>

            <div className=''>

            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidenavbar