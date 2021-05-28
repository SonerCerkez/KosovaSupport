import React from 'react'
import '../App.css';
import './Test.css';
import {  Button  } from './Button'
import img1 from '../assets/lead.png'


class Test extends React.Component {
  render  ()  {
    return <div className="leads--container">
  <div className="first--sec">
      <img src={img1} alt="" />    
                  </div>
                  <div className="second--sec">
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
 
 
  }
}

export default Test