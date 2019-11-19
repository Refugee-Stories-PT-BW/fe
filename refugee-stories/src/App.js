import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logout from './components/Logout'
import RegisterForm from './components/Register'
import { Link, Route, withRouter } from 'react-router-dom'
import Login from './components/Login'
import { getToken } from './utils/api'

function App() {

  const signedIn = getToken();

  console.log(signedIn);

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/register'>Register</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}
        {!signedIn && <Link to='/login'>Login</Link>}
      </nav>

      <p>Hello World</p>

      <Route exact path="/register" component={RegisterForm} />
      <Route exact path='/logout' component={Logout}/>
      <Route exact path='/login' component={Login}/>

    </div>
  );
}

export default App;
