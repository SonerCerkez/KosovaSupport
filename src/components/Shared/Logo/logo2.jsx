import React from "react";
import { Link } from "react-router-dom";
import './Logo.scss';

const logo = () => {
  return (
    <Link to="/" className="nav-logo" id="logo" style={{paddingLeft: '0em'}}>
      <span className="text-logo">
        <strong>k</strong>
        <p style={{color:'black'}}>kosovasupport</p>
        </span>
    </Link>
  );
};

export default logo;
