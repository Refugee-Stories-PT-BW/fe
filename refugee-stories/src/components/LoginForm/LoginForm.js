import React, {useState} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

function LoginForm (props) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        axiosWithAuth().post('/auth/login', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

        setData({email:'', password:''})

    }

    return (

        <div>
            <form onSubmit = {handleSubmit}>

            <input name = 'email'
                type = 'text'
                value = {data.email}
                onChange = {handleChange}
                placeholder = 'Email'/> 

            <input name = 'password'
                type = 'password'
                value = {data.password}
                onChange = {handleChange}
                placeholder = 'Password'/> 

            <button type='submit'>Submit</button>

            </form>
        </div>

    )

}

export default LoginForm;