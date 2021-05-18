import React from 'react'
import '../App.css';
import './Starter.css';
import { Button } from './Button'
import img1 from '../assets/start.png'
import img2 from '../assets/blue.png'
import img3 from '../assets/ellipse.png'
import img4 from '../assets/fly.png'
import img5 from '../assets/rectangle.png'
import img6 from '../assets/goal.png'




function Starter() {
    return (
        <div>
            <div className="first--container">

                <div className="left-section">
                    <div className="position1">
                    <img src={img2} alt='alt1' />
                    </div>
                    <div className="position2">
                    <img src={img1} alt='alt1' />
                    </div>
                    <div className="position3">
                    <img src={img3} alt='al1' />
                    </div>
                    <div className="position4">
                    <img src={img4} alt='al1' />
                    </div>
                    <div className="position5">
                    <img src={img5} alt='al1' />
                    </div>
                    <div className="position6">
                    <img src={img6} alt='al1' />
                    </div>
                </div>

                <div className="starter-section">
                    <h1>We are not your typical Lead <br /> Generation Agency </h1>
                    <p>Our team handles every aspect of a client's top-of-the-sales-funnel <br /> needs, from building targeted sales leads lists to B2B appointment <br />
                     setting with qualified prospects.</p>
                     <h3>The Kosovasupport team is made up of experienced B2B sales <br /> development representatives (SDR's) marketing gurus, and <br /> 
                     copywriters.</h3>
                     <p>For us, its not just a job - it's a lifestyle. And this lifestyle has led to <br /> some of the best work on the market, Don't take our word for it! <br />
                        We're proud of our many customer testimonials on Clutch, and <br /> rated 5 of 5 by dozens of clients.</p>
            
                        <div className="button-starter">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Learn More</Button>    </div>
                  <div className="button-starter1">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Find a job with us!</Button>    </div>            

                </div>
            </div>
        </div>
    )
}

export default Starter
