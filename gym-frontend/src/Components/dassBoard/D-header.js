import React from 'react'
import "./D-header.css"
import { useNavigate } from "react-router-dom";
function Dasheader() {
  const Navigate=useNavigate()
    const Authtoken=localStorage.getItem("authorization");
    const UserName = localStorage.getItem("userName");
    
    const logoutHandler = () =>{
        localStorage.setItem("authorization", "")
        localStorage.setItem("userName", "")
        Navigate("/");
    }
  return (
    
    <>
      <header id="header">
            <div className="heading"><h2>CREDO GYM</h2></div>
          
            <div id="rigth-head">
            {/* <div className="list1">
            <p className="pricing">Pricing</p>
            </div> */}
            
            <div className="list2">
                <p className="career">OUR TIME: <br></br>12 PM - 6 PM</p>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                        <div className="Imgcontain">
                        <div><img id="Logo" src="./images/icon.jpg" alt=""/></div>
                        
                        <div id="userName">{UserName}</div>
                        </div>
                </button>
                <div className="dropdown-content" onClick={()=>{logoutHandler()}}>
                    LOG OUT
            </div>
            </div>

            </div>
            
        </header>
    </>
  )
}

export default Dasheader;