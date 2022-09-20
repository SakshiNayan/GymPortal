import React from 'react'
import "./cover.css"
import Header from './header'
import Footer from './footer'
import CopyRight from './copyRit'
function CoverPg() {
  return (
    <div>
        <Header/>
        <div id='cover-body'>
            <img src="./images/cover3.jpg" alt=""  className='coverImg'/>
            <div id="cover-content">
                <div className='gym-content'>
                    <h1>GET INTO THE <span style={{color:"red"}}>SHAPE</span></h1>
                </div>
                <div>
                    <form >

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
