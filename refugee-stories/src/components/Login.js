import React, {useState} from 'react'
import api from '../utils/api'

function Login (props) {

    const [data, setData] = useState({
        username: '',
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

        api().post('/users/login', data)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                console.log(res);
                props.history.push("/")
            })
            .catch(err => {
                console.log(err);
            })

        setData({username:'', password:''})

    }

    return (

        <div>

            <h1>Login</h1>

            <form onSubmit = {handleSubmit}>

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

            <button type='submit'>Submit</button>

            </form>
        </div>

    )

}

export default Login;