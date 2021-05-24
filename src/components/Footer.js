import React from 'react';
import './Footer.css';
import img1 from '../assets/kosova.png'
import SelectLanguage from '../components/Shared/SelectLanguage/SelectLanguage'
import { Link } from 'react-router-dom';






function Footer(props) {
    return (
      
      <div className='footer-container'>
        <SelectLanguage
              setLanguage={props.setLanguage}
              language={props.language}
              />
        <section className='footer-text'>
          
        <div className='line-area'>
        <Link to='/home'>
            <img src={img1} alt=""/>
            </Link>
          </div>
          <p className='footer-text-heading'>
            Perfection is our goal. We attach great importance to ambition and punctuality. <br /> We reach together with you hight quality
          </p>

               
        </section>
        
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
              <div className="footer-first">
              <img src={img1} alt="" />
              <h3>Award-winning B2B</h3>
              <h3>Lead Generation Agency</h3>
              <div className="icons">Follow Us
        <Link to='/facebook' ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></g></svg></Link>
        <Link to='/instagram' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></Link>
        <Link to='/twitter' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
        <Link to='/linkedin' ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path></svg></Link>
        </div>
        <h3>+(080)20 339911</h3>
         
              </div>
            <div class='footer-link-items'>  
              <h2>Copmany</h2>
              <Link to='/sign-up'>Company</Link>
              <Link to='/'>Abous us</Link>
              <Link to='/'>Our Team</Link>
              <Link to='/'>Services</Link>
              <Link to='/'>Career</Link>
              <Link to='/'>Partners</Link>
            </div> 
            <div class='footer-link-items'>
              <h2>Services</h2>
              <Link to='/'>B2B Appointment Setting</Link>
              <Link to='/'>Sales Lead Qualifications</Link>
              <Link to='/'>Sales Lead Generation</Link>
              <Link to='/'>Emergency Telemarketing</Link>
              <Link to='/'>Client Retention</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Industries</h2>
              <Link to='/'>Healthcare</Link>
              <Link to='/'>Technology</Link>
              <Link to='/'>Education</Link>
              <Link to='/'>Logistic</Link>
              <Link to='/'>Financial</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Resources</h2>
              <Link to='/'>Case Studies</Link>
              <Link to='/'>The Blog</Link>
              <Link to='/'>How-to Guides</Link>
              <Link to='/'>Help Center</Link>
              <Link to='/'>Sales Tools</Link>
            </div>
          </div>       
        </div>
        
          <div class='footer-rights'>
              <small>© 2021 Kosovasupport. All Rights Reserved</small>
              <Link to='/'>Terms of use | Privacy</Link>        
            </div> 
        <section class='social-media'>
          <div class='social-media-wrap'>
                   
          </div>
          
        </section>
      </div>
    );
  }
  
  export default Footer;