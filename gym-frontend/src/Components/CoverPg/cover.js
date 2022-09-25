import React, { useState,useEffect} from 'react'
import "./cover.css"
import Header from './header'
import Footer from './footer'
import CopyRight from './copyRit'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom"
function CoverPg() {
    
   const navigate=useNavigate()
    const [login, setLogin]=useState({
        "userName":"",
        "password":""
      })
    const handleinput=(e,id)=>{
          if (id === "userName") {
            setLogin({ ...login, userName: e.target.value })
          } else if (id === "password") {
              setLogin({ ...login, password: e.target.value })
          }
    }
    const [show,setshow]=useState(false)
    
    const handleLogin = (e, ) => {
      e.preventDefault();
      if (login.userName === "" || login.password === "") {
          alert("username or password is missing");
      } else {
          axios({
              url: "https://gym-serverpg.herokuapp.com/user/login",
              method: "POST",
              headers: {
              },
              data: login
          }).then((loginData) => {
                console.log(loginData.data.userName)
              localStorage.setItem("authorization", loginData.data.AuthToken);
              localStorage.setItem("userName", loginData.data.userName)
             navigate("/dashboard");
          }).catch((err) => {
              setshow(!show)
              setTimeout(()=>{
                  setshow(!setshow)
              },2000)
              console.log(err)
          })
      }
      setLogin({userName:"",password:""})
    }    

  return (
    <div>
        <Header/>
        <div id='cover-body'>
            <img src="./images/cover3.jpg" alt=""  className='coverImg'/>
            <div id="cover-content">
                <div className='gym-content'>
                    <h1 className='text-content'>GET INTO   <br></br>THE <span style={{color:"red"}}>SHAPE ...</span></h1>
                    <p className='para'>Every day is another chance to get stronger, to eat better,<br></br> to live healthier, and to be the best version of you</p>
                    <div id="regis-part">
                        <p><b>Don't Have An Account?</b></p>
                       <Link to='/register'> <button id="regis-button">Register</button></Link>
                    </div>
                </div>
                <div className='gym-login'>
                    <h1 style={{color:"lightgray"}}>LOGIN</h1>
                    
                    <form className='login-form' onSubmit={(e) => handleLogin(e)}>
                        <br></br>
                        <div className='input-field'>
                            <label className='lable'>User Name</label>
                            <div><input  className='input' type="text" onChange={(e)=>handleinput(e,"userName")} value={login.userName}></input></div>
                           
                            <div className='signin-blueline' ></div>

                        </div>
                        <div className='input-field'>
                            <label className='lable'>Password</label>
                            <div><input  type="password" onChange={(e)=>handleinput(e,"password")} value={login.password}></input>
                            <img src='./images/padlock.svg' alt='padlock' style={{width: "20px", height: "20px"}} className="padlock"/>
                            </div>
                           
                            <div className='signin-blueline' ></div>
                        </div>
                        <p className='Forgot-password'>Forgot Password?</p>
                        <div id="login-b"><button   id="Button-signin">Sign In</button></div>
                        

                    </form> 
                </div>
            </div>
        </div>
       
        <Footer/>
        <CopyRight/>
    </div>
  )
}

export default CoverPg
