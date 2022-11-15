import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'
import * as CgIcons from 'react-icons/cg'
import * as CiIcons from 'react-icons/ci'

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
                <div className='smalldiv'></div>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/dashboard"><RiIcons.RiDashboardLine size={20} style={{marginRight:"10px",}}/><span style={{}}>Dashboard</span></NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/property" className='actualdiv'><BiIcons.BiBuildings size={20} style={{marginRight:"10px",}}/><span style={{marginRight:"18px"}}>Property</span></NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/tenant" className='actualdiv'><FaIcons.FaHouseUser size={20} style={{marginRight:"10px",}}/><span style={{marginRight:"18px"}}>Tenants</span></NavLink>
              </div>
            </li>

            <li>
              <div className='navselect'>
                <div className='smalldiv'></div>
                <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to="/profile" className='actualdiv'><CgIcons.CgProfile size={20} style={{marginRight:"10px",}}/><span style={{marginRight:"25px"}}>Profile</span></NavLink>
              </div>
            </li>

            <div className=''>

            </div>
          </ul>
        </div>
      </div>
      <div className='footernav'>
        <div className='profilecont'>
          <BsIcons.BsPerson style={{height:"100%", width:"100%", margin:""}}/>
        </div>
        <div className='logoutcont'>
          <CiIcons.CiLogout size={30} style={{marginRight:"0.7rem"}}/>
          <span>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Sidenavbar