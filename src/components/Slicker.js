import React from 'react'
import '../App.css';
import './Slicker.css';
import { motion } from "framer-motion"








function Slicker() {
    return (
        
        <div>      
                <div className="left-slicker">
                    <motion.div 
                    
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 3.5 }} className="h1slcik">
                    <h1>Lead Generation Services That Drive Results.</h1>
                    <p>Speak with a seasoned sales specialist to get started with lead
                        research, email deliverability fixing, B2B appointment setting and more.
                        
                    </p>
                    </motion.div>

        <div className="right-slicker">
                    <motion.div 
                    
                    initial={{ x: '80vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 20, delay: 1.5 }} className="h2slcik">
                    <div className="pack">
                        <div className="packbox">
                    <div className="slciker1">
                    <h5> Lead  Generated</h5>
                    <h2>2.391.402</h2>
                    </div>
                    
                    <div className="slciker2">
                    <h5>Contacts</h5>
                    <h2>39.201.392</h2>
                    </div>
                    </div>
                    <div className="packbox2">
                    <div className="slciker3">
                    <h5> Appointment Scheduled</h5>
                    <h2>32.019</h2>
                    </div>
                    
                    <div className="slciker4">
                    <h5> Satisfied Client</h5>
                    <h2>3.007</h2>
                    </div>
                    </div>
                    </div>
                        
                    
                    </motion.div>
                    
                    </div>
                  
                    
                 
                    

                    
                    </div>
                </div>
                   
                           
                                                               
                         
                        
     
        
    )
}

export default Slicker
