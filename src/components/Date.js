import React from 'react'
import '../App.css';
import './Date.css';
import { Button } from './Button'
import img1 from '../assets/date.png'






function Date() {
    return (

     
   
            <div className="date--container">

                <div className="left-sectiondate">
                    <h1>Appointment Setting</h1>
                    <p>Your dedicate sales development representative engages with <br /> your prospects on your behalf via Email and LinkedIn with their only <br /> goal
                     being to book up 
                        your calendar with qualified appointments.
                    </p>
                    <p>Weather it be a phone call, an online demo, or an in-person meeting <br /> at a trade show, be sure to receive high-quality appointment <br /> 
                    setting services from Kosovasupport SDR's. We help get you in front <br /> of your priority prospects </p>
                    <div className="button--date">
                  <Button
                  className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Explore Appointment Setting Services</Button>    </div>
                </div>

                
                        <div className="right-sectiondate">
                        <img src={img1} alt="" />         
</div>
                </div>
        
        
    )
}

export default Date
