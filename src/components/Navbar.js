import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
import img from '../assets/kosova.png'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
  

 
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [] )

    window.addEventListener('resize', showButton)

    


    return (
        
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                        <img src={img} alt='img1' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' >                          
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        <li className='nav-item' >
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/Solutions' className='nav-links' onClick={closeMobileMenu}>
                                Solutions
                            </Link>
                        </li>                       
                        <li className='nav-item' >
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>  
                        <li className='nav-item' >
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>                                         
                     </ul>
                     <div className="login">
                     {button && <Button buttonStyle='btn--outline'>Login</Button>}
                     </div>
                     <div className="signup">
                     {button && <Button buttonStyle='btn--outline'>Signup</Button>}
                     </div>
                </div>
            </nav>
        
    )
}

export default Navbar
