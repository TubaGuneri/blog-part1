import logoMedium from "./../../assets/logo-medium.png"
import './Navigation.css';
// eslint-disable-next-line no-unused-vars
import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

function Navigation (){
    const navigate = useNavigate();

    return(
        <nav className="main-navigation outer-content-container">
        <div className="inner-nav-container">
            <button type= 'button' className='main-navigation-logo-button' onClick={() => navigate('/')}>
            <img className="nav-logo" src={logoMedium} alt='Logo that links to home page'/>
            </button>

            <ul className="main-navigation-links">
                <li>
                    <NavLink className={({isActive}) => isActive? "active-link" : "default-link"} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active-link' : 'default-link'} to= '/posts'>
                        Alle posts
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active-link' : 'default-link'} to= '/new'>
                        Nieuwe post maken
                    </NavLink>
                </li>

            </ul>
        </div>
        </nav>
    );
}

export default Navigation;