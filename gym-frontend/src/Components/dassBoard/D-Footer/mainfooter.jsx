import React from 'react'
import "./mainfooter.css"
function Mainfooter() {
  return (
    <div id='mainFooter'>
      <div className='columns'>
      <div className='M-heading' style={{color:"blue"}}>about us</div><div id='about-content-footer'>Gym can help you stay motivated to exercise consistently</div>
      </div>
      <div className='columns'>
      <div className='S-heading' style={{color:"blue"}}> Home</div><div className='content-footer'>Sign in</div><div className='content-footer'>Register</div>
      </div>
      <div className='columns'>
      <div className='S-heading' style={{color:"blue"}}>Fitness</div><div className='content-footer'>Aerobics</div><div className='content-footer'>Cardio</div><div className='content-footer'>Weight Lifting</div>
      </div>
      <div className='columns'>
      <div className='S-heading' style={{color:"blue"}}>Career</div><div className='content-footer'>Blogs</div><div className='content-footer'>Create</div>
      </div>
      <div className='columns'>
        <div className='S-heading' style={{color:"blue"}}>Contact</div>
      </div>
      <div className='columns'>
        <div className='M-heading' style={{color:"blue"}}>social media</div><div>
          <div className='footer-images'>
          <img className='img-footer' alt='facebook' src='images/facebook.svg'/>
          <img className='img-footer' alt='instagram' src='images/instagram.svg'/>
          <img className='img-footer' alt='linkedin' src='images/linkedin.svg'/>
          </div>
          </div></div>

    </div>
  )
}

export default Mainfooter
