import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div id='header-nav'>
        <div id='gym-header'>
            <img src="./images/logo.png" alt="" className='logo' />
        </div>
        <div id='Home-header'><div id='content-home-header'>Home</div></div>
        <div id='Pricing-header'><div id='content-pricing-header'>Free-Trial</div></div>
        <div id='Career-header'><div id='content-career-header'>Subscribe</div></div>
        <Link to="/">
        <div  id='login-header'>
            <div><img src="./images/padlock.svg" alt="" id='padlock'/> </div>
            <div id='content-signin-header'>Signin</div>
        </div>
        </Link>

      
    </div>
  )
}

export default Header
