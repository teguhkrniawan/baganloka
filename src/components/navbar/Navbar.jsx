import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
import { AuthContext } from './../../context/AuthContext';

const Navbar = () => {

    const { loading, error, dispatch, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = (e) => {
        dispatch({
            type: "LOGOUT"
        })
        navigate('/login')
    }

    const handleToLogin = (e) => {
        navigate('/login')
    }

    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to={'/'}>
                    <div className="logo">
                        Baganloka
                    </div>
                </Link>
                {
                    user ? (
                        <>
                            <div className="navItems">
                                <button className="navButton" onClick={handleLogout}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="navItems">
                                <button className="navButton">Register</button>
                                <button className="navButton" onClick={handleToLogin}>Login</button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar