import React from 'react'
import './navbar.css'
import Logo from '../../assets/image/gol-logo.png'
import {RiArrowDropDownLine}  from 'react-icons/ri'

function NavBar() {
  return (  
    <>
    <div className='navbar'>
    <div className="logo">
        <img className='logo-image' src={Logo} alt="Logo" />
    </div>
    <div className="nav-titles">
        <span>Find Reservations</span>
        <span>Packages
        <RiArrowDropDownLine style={{fontSize:'30px'}}/>
        </span>
        <span>About Lakshadweep
            <RiArrowDropDownLine style={{fontSize:'50px'}}/>
        </span>
        <span>About Us</span>
        <span>Gol</span>
        <span>Support</span>
    </div>
    <div className="log-button">
        <div className="login">
            <span>Login</span>
        </div>
        <div className="signup">
            <span>Signup</span>
        </div>
    </div>
    </div>
    </>
  )
}

export default NavBar