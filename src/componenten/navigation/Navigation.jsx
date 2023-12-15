
import './Navigation.css';
// eslint-disable-next-line no-unused-vars
import React from "react";
import {NavLink} from "react-router-dom";

function Navigation (){
    return(
        <nav>
        <div className="nav-container">
<img className='nav-icon' src='src/assets/logo-medium.png' alt=''/>
            <ul>
                <li>
                    <NavLink to= '/' className={({isActive}) => isActive === true? 'active-link' : 'default-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/newpost' className={({isActive}) => isActive === true? 'active-link' : 'default-link'}>
                        Nieuwe posten
                    </NavLink>
                </li>
                <li>
                    <NavLink to= '/overview' className={({isActive}) => isActive === true? 'active-link' : 'default-link'}>
                        Overzicht
                    </NavLink>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navigation;