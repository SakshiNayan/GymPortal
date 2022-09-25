import React from 'react'
import "./confirm.css"
import {Link} from 'react-router-dom'
import Dasheader from '../dassBoard/D-header'
function Confirm() {
  return(
    <>
    <Dasheader/>
    <div id="background">
    <div id='card'>
   
    <div className='innerContainer'>
      <img src='/images/tick.svg' className='tickImg' alt=""></img>
        <p className='cardPara' ><b>Your Slot Booked <br/> Sucessfully</b></p>
        
        <Link to="/"><button id="goToOrderButton" >Go to SignIn</button></Link>
      </div>
    </div>
    </div>
    </>
  
    
)
}

export default Confirm
