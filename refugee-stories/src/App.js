import React, { useState } from 'react';
import { withRouter, Route, Link, } from 'react-router-dom'
import SubmitStory from './components/SubmitStory/SubmitStory'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/Register/Register'
import StoriesList from './components/StoriesList/StoriesList'
// import TabNav from './components/TabNav/TabNav'
import Home from './components/Home/Home'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { getToken } from './utils/api'
import api from './utils/api'
import './App.css';


function App() {
  const signedIn = getToken()
  const[stories, setStories] = useState([])

  const fetchStories = () => {
    api()
    .get('/stories')
    .then(res => {
      console.log('List of users', res)
      setStories(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
          <nav>
            <Link to='/'>Home</Link>
            {!signedIn && <Link to='/register'>Register</Link>}
            {!signedIn && <Link to='/login'>Login</Link>}
            {signedIn && <Link to='/submitstory'>Submit a Story</Link>}
            {signedIn && <Link to='/stories'>Stories</Link>}
          </nav>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' render={props => <Register {...props}/>} />
            <Route path='/login' render={props => <LoginForm {...props}/>} />
              <Route exact path='/submitstory' render={props => <SubmitStory {...props}/>} />
              <Route exact path='/stories' render={props => (
                <StoriesList {...props} stories={stories} fetchStories={fetchStories} /> )} />
              {/* <PrivateRoute exact path='/stories' render={props => <StoriesList {...props}/>} /> */}
      </section>
    </div>
  );
}

export default withRouter(App);
