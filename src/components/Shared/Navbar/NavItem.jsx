import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.scss';
const NavItem = (props) => {
    return (
        <li className={`nav-item ${props.styles}`}>
            <NavLink className="nav-link" exact to={props.to} >{props.children}</NavLink>
        </li>
    )
}

export default NavItem
