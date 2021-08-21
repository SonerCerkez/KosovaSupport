import React from 'react'
import '../App.css';
import './Shade.css';
import { Button } from './Button'
import img1 from '../assets/samsung.png'
import img2 from '../assets/shade.png'





function Shade() {
    return (
        <div>
            <div className="shade--container">
                <div className="image1">
                    <img src={img1} alt='img' />
                </div>
                    <img src={img2} alt='img' /> 
                </div>
                <div className="text-shade">
                <h1>Get a hand-curated sample of leads for free!</h1>
                </div>
                <div className="form-shade">
                <form>
            <label for="phone2"></label>
            <input type="tel" id="phone" name="phone2" color="white" size='30' placeholder="youremail@kosovasupport.com" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
              </form> 
              <div className="shade--button">      
              <Button className='btns'  
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >Get 20 free leads today</Button>    </div> 
                <div className="form1">
                <form>
            <label for="phone"></label>
            <input type="tel" id="phone" name="phone" color="white" size='30' placeholder="youremail@kosovasupport.com" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
              </form> 
                </div>
                </div>
                
                          

                </div>
           
        
    )
}

export default Shade
