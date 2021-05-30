import React, { useState, useEffect } from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import throttle from "lodash.throttle";
import Logo from "../Logo/Logo";
import{ Button } from '../../../components/Button'



const Header = (props) => {
  let classes = [];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY >= 100) setScrolled(true);
      else setScrolled(false);
    }, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrolled) classes.push("scrolled");
  else classes.push(props.styles);

  return (
    <header className={`header ${classes.join(" ")}`}>
      <Logo scrolled={scrolled || props.styles === "scrolled"} />
      <Navbar />

      <div className="header--button">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    LOG IN  <i class="fas fa-sign-in-alt" />
                </Button>
                
                <Button className='btns'  
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    SIGN UP <i class="fas fa-user-plus" /> 
                </Button>
                </div>
               
    </header>
    
  );
};

export default Header;
