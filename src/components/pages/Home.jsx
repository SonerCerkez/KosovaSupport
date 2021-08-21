import React from 'react'
import '../../App.css'


import Header from '../../components/Shared/Header/Header'
import Login from '../../components/Shared/Login/Login'
import Slicker from '../Slicker'
import Starter from '../Starter'
import Date from '../Date'
import Leads from '../Leads'
import Linked from '../Linked'
import Shade from '../Shade'
import Shade2 from '../Shade2'
import Case from '../Case'
import Case2 from '../Case2'
import Blue from '../Blue'
import Footer from '../Footer'







function Home () {
    return (
        <div>
        <Header />
        
        <Slicker />
        <Starter />

        <Date />
        <Leads />
        <Login />
        <Linked />
        <Shade />
        <Case2 />
        <Case />
        <Blue />
        <Shade2 />
        <Footer />
       
        </div>

        
    )
}

export default Home