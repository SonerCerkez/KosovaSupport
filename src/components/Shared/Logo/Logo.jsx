import React from 'react';
import {Link} from 'react-router-dom';
import LogoW from './LogoW';
import LogoB from './LogoB';
const Logo = (props) =>{
    let logo = <LogoW className="logo logo1" /> ;
    if(props.scrolled) logo = <LogoB className="logo"/>;
    return(
        <Link to="/" className="logo" id="logo">
            {logo}
        </Link>
    );
};
export default Logo;
