import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidenavbar() {
  let activeStyle = {
    borderRadius: "7px",
    height: "1.5rem",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "90%",
    backgroundColor:"rgb(47, 141, 47)"
  }

  let notActiveStyle = {
    borderRadius: "7px",
    height: "1.5rem",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    textDecoration: "none",
    color: "rgb(116, 117, 134)",
    fontWeight: "500",
    fontSize: "90%"
  }
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
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/dashboard">Dashboard</NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/property" className='actualdiv'>Property</NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/tenant" className='actualdiv'>Tenants</NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/profile" className='actualdiv'>Profile</NavLink>
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