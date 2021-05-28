import React from 'react'
import '../../App.css'


import Header from '../../components/Shared/Header/Header'
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
        <>
        <Header />
        <Slicker />
        <Starter />
        
        <Date />
        <Leads />
        <Linked />
        <Shade />
        <Case2 />
        <Case />
        <Blue />
        <Shade2 />
        <Footer />
       
        

        </>
    )
}

export default Home