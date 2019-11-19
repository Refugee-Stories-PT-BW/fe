import React, {useState} from 'react';
import api from '../utils/api'

function RegisterForm(props) {

    const [data, setData] = useState({
        // firstName: '',
        // lastName: '',
        username: '',
        password: '',
        role: ''
        // country: ''

    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        api().post('/users/register', data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                console.log(res);
                props.history.push("/")
            })
            .catch(err => {
                console.log(err);
            })

        setData({username: '', password: ''})

    }

    const countryOptions = [
        'United States',
        'United Kingdom',
        'Canada',
        'Mexico'
    ]

    return (
        <div className='register-form-container'>

            <h1>Register</h1>

            <form className='input-fields' onSubmit = {handleSubmit}>

                {/* <input name = 'firstName'
                type = 'text'
                value = {data.firstName}
                onChange = {handleChange}
                placeholder = 'First Name'/>

                <input name = 'lastName'
                type = 'text'
                value = {data.lastName}
                onChange = {handleChange}
                placeholder = 'Last Name'/> */}

                <input name = 'username'
                type = 'text'
                value = {data.username}
                onChange = {handleChange}
                placeholder = 'Username'/>

                <input name = 'password'
                type = 'password'
                value = {data.password}
                onChange = {handleChange}
                placeholder = 'Password'/>

                <input name = 'role'
                type = 'text'
                value = {data.role}
                onChange = {handleChange}
                placeholder = 'Role'/>

                {/* <select name = 'country'
                value = {data.country}
                onChange = {handleChange}
                placeholder = 'Country'>

                    <option value='' disabled>Select Country</option>

                    {countryOptions.map(option => {
                        return (
                            <option
                            key={option}
                            value={option}
                            label={option}> {option} </option>
                        )
                    })}

                </select> */}

                <button type = "submit">Register</button>

            </form>

        </div>
    )

}

export default RegisterForm;