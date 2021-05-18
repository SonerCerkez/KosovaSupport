import React from 'react'
import '../App.css';
import './Linked.css';
import { Button } from './Button'
import img1 from '../assets/stock.png'





function Linked() {
    return (
        <div>
            <div className="linked--container">

                <div className="left-linked">
                    <h1>Influencer Marketing on LinkedIn</h1>
                    <p>Struggling to establish yourself as a LinkedIn influencer? <b> We'll  <br /> create content and provice outreach </b> on your behalf, so you <br /> 
                     can enjoy more visibility, connections, and sales. We've <br /> 
                     systematized our growth experience and turned it into a <br />
                     service that <b> transofrms our clients into LinkedIn social <br /> influencers </b>
                     and growth machines.  
                    </p>
                    <div className="button--linked">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Explore Appointment Setting Services</Button>    </div>
                </div>

                
                        <div className="right-linked">
                        <img src={img1} alt="" />         
</div>
                </div>
            </div>
        
    )
}

export default Linked
