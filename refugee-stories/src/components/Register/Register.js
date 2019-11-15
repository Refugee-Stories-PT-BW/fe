import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

function Register(props) {

    const [credentials, setCreadentials] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    })

    const handleChange = e => {
        setCreadentials({...credentials, [e.target.name]: e.target.value})
        // console.log('Register input value...', credentials)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("https://refugee-stories-api19.herokuapp.com/auth/register", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/admin')
        })
        .catch(err => console.log(err))
    };
    
    return (
        <div className='Register'>   
            {/* <h1>Register</h1> */}
            <p>First time here?Please,Create an account!</p>
            <form onSubmit={handleSubmit} className='register-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                placeholder='Email'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='firstName' 
                placeholder='First Name'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='lastName' 
                placeholder='Last Name'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                placeholder='Password'>
                </input>
                <button>Submit</button>

                <div id='login'>
                <Link to='/login'>Already have an account?</Link>
                </div>
            </form> 
        </div> 
    )
}

export default Register;