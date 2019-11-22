import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout(props) {
    localStorage.removeItem("token");

    console.log('test')

    return <Redirect to='/login'/>
}

export default Logout