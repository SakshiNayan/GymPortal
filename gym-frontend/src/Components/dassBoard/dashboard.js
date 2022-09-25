import React, { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import "./dashboard.css"

function Dashboard() {

  const aerobicSlot = 30;
  const cardioSlot = 30;
  const liftingSlot = 30;
  const [booked, setBooked] = useState([]);

  useEffect(()=>{
      axios.get("https://gym-serverpg.herokuapp.com/book/userdata").then((data)=>{
         setBooked(data.data);
         
      }).catch((err)=>{
          console.log(err)
      })
  }, [])
  console.log(booked);
  const getExercise = (booked)=>{
      let a = 0;
      let c = 0; let w=0;
      for(let i=0; i<booked.length; i++){
          if(booked[i].Exercise === "Aerobics"){
              a++;
          }
          if(booked[i].Exercise === "Cardio"){
              c++;
          }
          if(booked[i].Exercise === "Weight Lifting"){
              w++;
          }
      }
  
      return [a, c, w]
  }
 
  let arr = [...getExercise(booked)]
  let aer = arr[0];
  let cardo = arr[1];
  let W_l = arr[2];
      
     let Aero = aerobicSlot - aer;
     let Cardo = cardioSlot - cardo;
     let Weight = liftingSlot - W_l;
  return (
    <>
      <div id="dashBoard">
      <img src="./images/dash2.webp" alt=""  className='dashImg'/>
            <div id='yogacard'>
                <div className='card'>
                    <div className='commonCard' >
                      <img src='./images/aerobic.jpg' alt='' className='cardImg' id="size"></img>
                      <p className='tag'>Aerobics</p>
                      <p className='time'><span style={{color:"red"}}>Timming : 12pm - 2pm</span> <br/><b>Remaining Slot: </b>{Aero}<br/><b>Booked Slot: </b>{aer}</p>

                      <Link to='/confirm'><button className='slot-button' >Book Slot</button></Link>
                    </div>
                </div>
                <div className='card'>
                  <div className='commonCard'>
                    <img src='./images/cardio.jpg' alt='' className='cardImg'></img>
                      <p className='tag'>Cardio</p>
                      <p className='time'><span style={{color:"red"}}>Timming : 2pm - 4pm </span><br/><b>Remaining Slot: </b>{Cardo}<br/><b>Booked Slot: </b>{cardo}</p>
                      <Link to='/confirm'><button className='slot-button' >Book Slot</button></Link>
                  </div>
                </div>
                <div className='card'>
                  <div className='commonCard'>
                    <img src='./images/wieght.jpg' alt='' className='cardImg' id='size1'></img>
                      <p className='tag'>Weight Lifting</p>
                      <p className='time'><span style={{color:"red"}}>Timming: 4pm - 6pm</span> <br/><b>Remaining Slot: </b>{Weight}<br/><b>Booked Slot: </b>{W_l}</p>
                      <Link to='/confirm'><button className='slot-button' >Book Slot</button></Link>
                  </div>
                </div>
                
            </div>

      </div>

    </>
  )
}

export default Dashboard
