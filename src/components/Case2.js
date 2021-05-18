import React from 'react'
import '../App.css';
import './Case2.css';
import img1 from '../assets/line.png'
import img2 from '../assets/line.png'
import img3 from '../assets/quote.png'
import img4 from '../assets/quote.png'
import img5 from '../assets/john.png'
import img6 from '../assets/andy.png'







function Case2() {
    return (
        <div className="case2--container">
            
            <div className="first-line">
                <div className="first-box">
                    <div className="text1">
                <h4>Industry: </h4>
                <h2>Construction</h2>
                </div>
                <div className="percentage1">
                    <div className="first">
                    <h2>34</h2>
                    <h5>Appointments</h5>
                    <div className="line">
                        <img src={img1} alt="" />
                    </div>
                    </div>
                    <div className="percentage2">
                    <div className="secondh">
                    <h2>70%</h2>   
                    <h5>Response Rate</h5>
                    </div>
                    </div>                
                </div>
                <div className="underline">
                <div className="quote1">
                        <img src={img3} alt="" />
                        </div>
                        
                        <p>When your mission is efficency and state-of-art <br /> technology, you want to inject max efficiency into your <br />
                             outreach - and you need the right experts to get started..." </p>
                             <div className="john-pic">
                            <h3>John Wright</h3>
                            <p>CEO at White Construction</p>
                            <div className="picture1">
                             <img src={img5} alt="" />
                             </div>
                             </div>
                        </div>  
                        
                        

                        

                </div>
                <div className="second-box">
                <div className="text2">
                <h4>Industry: </h4>
                <h2>Agricultural Services</h2>
                </div>
                <div className="percentage1">
                    <div className="second">
                    <h2>30</h2>
                    <h5>Appointments</h5>
                    <div className="line">
                        <img src={img2} alt="" />
                    </div>
                    </div>
                    <div className="secondh-box">
                    <h2>50%</h2>   
                    <h5>Response Rate</h5>         
                    </div> 
                         
                </div>
                <div className="underline2">
                <div className="quote2">
                        <img src={img4} alt="" />
                        </div>
                        <p> When business owners want to optimize their sales <br />
                             they should start by optimazing the time required for <br />
                             contact data research, and building email strategies..." </p>
                        </div> 
                        <div className="andy-pic">
                            <h3>Andy William</h3>
                            <p>CEO at White Construction</p>
                            <div className="picture2">
                             <img src={img6} alt="" />
                             </div>
                             </div>
                                </div>

                

            

                                <div className="first-box">
                    <div className="text1">
                <h4>Industry: </h4>
                <h2>Construction</h2>
                </div>
                <div className="percentage1">
                    <div className="first">
                    <h2>26</h2>
                    <h5>Appointments</h5>
                    <div className="line">
                        <img src={img1} alt="" />
                    </div>
                    </div>
                    <div className="percentage2">
                    <div className="secondh">
                    <h2>62%</h2>   
                    <h5>Response Rate</h5>
                    </div>
                    </div>                
                </div>
                <div className="underline">
                <div className="quote1">
                        <img src={img3} alt="" />
                        </div>
                        
                        <p>When your mission is efficency and state-of-art <br /> technology, you want to inject max efficiency into your <br />
                             outreach - and you need the right experts to get started..." </p>
                             <div className="john-pic">
                            <h3>John Wright</h3>
                            <p>CEO at White Construction</p>
                            <div className="picture1">
                             <img src={img5} alt="" />
                             </div>
                             </div>
                        </div>  
                </div>
                </div>
                </div>
        
            


       
    )
}

export default Case2
