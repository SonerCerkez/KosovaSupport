import React from 'react'
import '../App.css';
import './Blue.css';
import img1 from '../assets/mail.png'
import img2 from '../assets/pipe.png'
import img3 from '../assets/reply.png'
import img4 from '../assets/circle.png'
import img5 from '../assets/gray.png'
import { Button } from './Button'


function Blue() {
    return (
        
        
    <div className="blue--container">
        <div className="gray">
            <img src={img5} alt="" />
        </div>
        <div className="header">
        <h1>Featured In</h1>
        </div>
        <div className="blue1-container"> 
        <div className="first-image">
        <img src={img1} alt="" />
        </div>
        <p>"Plenty of companies struggle to reach their sales objectives.
            Theyeither have prospects that take forever to close or, worse,
            never close at all. When you look closer,
            this is usually due to not having a clearly-defined sales
            process in place..."
        </p>
        <div className="button--blue">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Read More</Button>    </div>
        </div>
        <div className="blue2-container">
            <div className="second-image">
        <img src={img2} alt="" />
        </div>
        <p>"Trusted B2B lead generation and appointment scheduling
            agency Kosovasupport has a presence in over 30 countries,
            where they offer a comprehensive range of sales
            and business development processes. Within the next 10 years,
            Kosovasupport aims to become a global..."
        </p>
        <div className="button--blue">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Read More</Button>    </div>
        </div>
        <div className="blue3-container">
            <div className="third-image">
        <img src={img3} alt="" />
        </div>
        <p>"Sending a B2B email can take a couple of minutes and one click.
            Writing a great B2B email takes time,knowledge and through research
            If you're looking for ways to 
            improve your strategy, check out this step-by-step guide.
            It covers style..."
        </p>
        <div className="button--blue">
                  <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                  >Read More</Button>    </div>
        </div>
        <div className="blue-elipse">
        <img src={img4} alt="" />
        </div>

    </div>


    )
}
    export default Blue