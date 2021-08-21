import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { MdMessage } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import img1 from '../../../assets/paint.png'
import img2 from '../../../assets/transparent.png'
import {  Button  } from '../../Button'

import "./Login.scss";

function Login() {
    return (
            <div className="login--container">        
            <div className="left--login">
                <h1>Leads</h1>
                <div className="transparent">
                <img src={img2} alt="" />
                </div>
                <div className="paint">
                <img src={img1} alt="" />
                </div>
                <div className="login--button">
      <Button className='login-button'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Explore Leads</Button>
                  </div>
                    <form className='form-login'>
                        <input type='checkbox' id="checkbox" class="largerCheckbox" name="checkbox"></input>
                        <label for="checkbox"> Glenn Hopper - CMO  <SiLinkedin />  <MdMessage /> <ImPhone /></label>
                    </form>
                    
                    <form className='form-login1'>
                        <input type='checkbox' id="checkbox" class="largerCheckbox" name="checkbox"></input>
                        <label for="checkbox1"> Jesse Ewell - COO  <SiLinkedin />  <MdMessage /> <ImPhone /></label>
                    </form>
                    <form className='form-login2'>
                        <input type='checkbox' id="checkbox" class="largerCheckbox" name="checkbox"></input>
                        <label for="checkbox"> Sandy Ram - President  <SiLinkedin />  <MdMessage /> <ImPhone /></label>
                    </form>
                    <div className="login-sec">
                    <h1>Lead Generation & Research</h1>
                    <p>Receive prospects that can't be found in ready-made lists. We search through every available free and paid source so <b> you get the most accurate and up-to-date database.</b> The kind of data that takes hours,
                      days and even Weeks for you spell SDR's out. </p>
                      <p><b>Use only fresh sales leads for cold email campaings and appointment setting.</b> Don't spend your time on anything below 100% quality
                      and personalization  </p>
                  <div className="leads--button">
      <Button className='leads-button'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Explore Lead Generation Services</Button>
                  </div>
                  </div>
                </div>
                
                
                
            
            
            <div className="right--login">

            </div>
            </div>
    )
}



export default Login









