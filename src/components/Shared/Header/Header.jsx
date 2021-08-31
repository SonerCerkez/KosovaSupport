import React, { useState, useEffect } from "react";
import Logo from '../Logo/Logo';
import Menu from '../Menu/Navigationlists';
import { NavLink } from 'react-router-dom';
import CartNumber from './CartNumber';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './Header.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import throttle from "lodash.throttle";
import { FormattedMessage } from "react-intl";
import SideDrawer from "./SideDrawer/SideDrawer";


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
      <Logo />
      <Menu />
      <div className="loginSignup-links">
      <div className="nav-icons">
          <NavLink to="/favorites" className="icons shopping-link">
          <FavoriteBorderIcon/>
          </NavLink>
          <NavLink to="/cart" className="icons favorites-link">
          <ShoppingCartOutlinedIcon/>
          <CartNumber/>
          </NavLink>
          <NavLink to="/notification" className="icons notification-link">
          <NotificationsNoneIcon/>
          </NavLink>
        </div>
        <NavLink to="/login" className="nav-link--transparent" >
          <FormattedMessage id="header.login" defaultMessage="Log In"/>
        </NavLink>
        <NavLink to="/signup" className="nav-link--bg " >
        <FormattedMessage id="header.register" defaultMessage="Register"/>
        </NavLink>
      </div>
      <SideDrawer/>
    </header>
  );
};

export default Header;
