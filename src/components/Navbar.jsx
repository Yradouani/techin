import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    const changeNavbar = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <div className={navbar ? "navigation active" : "navigation"}>
            <img src="./logo_techin.png" alt="" />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Nos missions</li>
                </NavLink>
                <NavLink to="/realization" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Nos réalisations</li>
                </NavLink>
                <NavLink to="/actualities" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Nos actualités</li>
                </NavLink>
                <NavLink to="/contactus" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Nous contacter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;