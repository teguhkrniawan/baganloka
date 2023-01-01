import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to={'/'}>
                    <div className="logo">
                        Baganloka
                    </div>
                </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar