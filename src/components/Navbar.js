import React, { useState } from 'react';
import { NavStyles } from '../styles/NavStyles';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    return (
        <NavStyles>
        <div 
            className="mobile-menu-icon"
            role="button"
            onClick={() => setShowNav(!showNav)}
            onKeyDown={() => setShowNav(!showNav)}
        >
            <MdMenu />
        </div>

        <ul className={showNav ? "nav-items hide-items" : "nav-items"}>
            <div 
                className="close-nav-icon"
                role="button"
                onClick={() => setShowNav(!showNav)}
                onKeyDown={() => setShowNav(!showNav)}
            >
                <MdClose />
            </div>
            <li> 
                <NavLink 
                    className="inactive"
                    activeClassName="active" 
                    exact to="/"
                    role="button"
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                >
                    Home 
                </NavLink> 
            </li>

            <li> 
                <NavLink 
                    className="inactive"
                    activeClassName="active"
                    exact to="/bio"
                    role="button"
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                >
                    Bio 
                </NavLink>
            </li>
            
            <li> 
                <NavLink
                    className="inactive"
                    activeClassName="active"
                    exact to="/blogs"
                    role="button"
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                > 
                    Blogs
                </NavLink>
            </li>
            
            <li>
                <NavLink
                    className="inactive"
                    activeClassName="active"
                    exact to="/projects"
                    role="button"
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                > 
                    Projects
                </NavLink>
            </li>
            
            <li>
                <NavLink
                    className="inactive"
                    activeClassName="active"
                    exact to="/contact"
                    role="button"
                    onClick={() => setShowNav(!showNav)}
                    onKeyDown={() => setShowNav(!showNav)}
                >
                    Contact
                </NavLink>
            </li>
        </ul>
        </NavStyles>
    )
}