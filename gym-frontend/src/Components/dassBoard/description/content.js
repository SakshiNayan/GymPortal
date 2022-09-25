import React from 'react'
import "./content.css"
function Description() {
  return (
    <>
        <div id="descript">
            <div className='contentclass'>
                <img src='./images/images.jpg' alt='cont' className='girl'></img>
            </div>
            <div className='contentclass'>
                <div className='aboutYog'>
                    <img src='./images/A.jpg' alt='aerobic' className='yoga'></img>
                    <div className='text'><p>Aerobic exercise keeps your muscles strong, which can help you maintain mobility as you get older. Exercise can also lower the risk of falls and injuries from falls in older adults. And it can improve your quality of life. Aerobic exercise also keeps your mind sharp.</p></div>
                </div>
                <div className='aboutYog'>
                    <img src='./images/C.png' alt='cardio' className='yoga'></img>
                    <div className='text'><p>Cardio exercise gets your heart rate up and keeps it up for a prolonged period of time. Your respiratory system will <br></br>start working harder as you begin to breathe faster and more deeply. Your blood vessels will expand <br></br>to bring more oxygen to your muscles, and your body will release natural painkillers.</p></div>
                </div>
                <div className='aboutYog'>
                    <img src='./images/W.jpg' alt='lifting' className='yoga'></img>
                    <div className='text'><p>Weight training is a type of strength training that uses weights for resistance. Weight training provides a stress to the muscles that causes them to adapt and get stronger, similar to the way aerobic conditioning strengthens your heart.</p></div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Description
