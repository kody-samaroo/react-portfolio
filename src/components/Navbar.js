import React, { useState } from 'react';
import { NavStyles } from '../styles/NavStyles';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

export default function Navbar() {
    const [showNav, setShowNav] = useState(true)

    function scrollToSection(value) {
        window.scrollTo({
            top: value,
            behavior: 'smooth'
        })
    }


    return (
        <NavStyles>
        <div 
            className="mobile-menu-icon"
            role="button"
            onClick={() => setShowNav(!showNav)}
        >
            <MdMenu />
        </div>

        <ul className={showNav ? "nav-items hide-items" : "nav-items"}>
            <div 
                className="close-nav-icon"
                role="button"
                onClick={() => setShowNav(!showNav)}
            >
                <MdClose />
            </div>
            <li> 
                <NavLink 
                    className="inactive"
                    activeClassName="active" 
                    exact to="/"
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(0)}}
                >
                    Home 
                </NavLink> 
            </li>
            
            <li> 
                <NavLink
                    className="inactive"
                    activeClassName="active"
                    exact to="/blogs"
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(650) }}
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
                    onClick={() => { setShowNav(!showNav); scrollToSection(1200) }}
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
                    onClick={() => { setShowNav(!showNav); scrollToSection(1850) }} 
                >
                    Contact
                </NavLink>
            </li>
        </ul>
        </NavStyles>
    )
}