import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
    return (
            <nav className='navbar'>
                <ul className='navbar-components'>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to = "/contact">contact</Link>
                    </li>
                </ul>
            </nav>
    );
}


export default NavBar;

