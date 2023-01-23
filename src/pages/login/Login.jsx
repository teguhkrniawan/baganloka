import React, { useState } from 'react'
import { useContext } from 'react'
import './login.scss'
import { AuthContext } from './../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { type } from '@testing-library/user-event/dist/type';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const { loading, error, dispatch, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        /**
         * alasan kenapa sintaks nya seperti dibawah
         * karena di backendnya itu pakai raw
         * jdi nanti variabel credentials itu adalah objek
         */
        setCredentials((prev) => (
            {...prev, [e.target.id] : e.target.value}
        ))
    }
    const handleClick = async (e) => {
        e.preventDefault()

        if(!credentials.username || !credentials.password){
            dispatch({
                type: "LOGIN_FAILURE",
                payload: {
                    message: "Username or password field empty"
                }
            })
        }

        if(credentials.username || credentials.password){
            dispatch({
                type: "LOGIN_START"
            })
    
            try {
                const response = await axios.post("/auth/login", credentials)
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data
                })
                navigate("/")
            } catch (error) {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: error.response.data
                })
            }
        }
    }

    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user])

    return (
        <div className='login'>
            <div className="lContainer">

                <p>BAGANLOKA</p>

                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder='username' 
                    onChange={handleChange} 
                    className='lInput' 
                />
                 <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='password' 
                    onChange={handleChange} 
                    className='lInput' 
                />
                <button className='lButton' onClick={handleClick} disabled={loading} >{ loading ? 'Please Wait...' : 'Login' }</button>
                { error && <span>{error.message}</span> }
            </div>
        </div>
    )
}

export default Login