import React, { useState } from 'react';
import { withRouter, Route, Link, } from 'react-router-dom'
import SubmitStory from './components/SubmitStory/SubmitStory'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/Register/Register'
import StoriesList from './components/StoriesList/StoriesList'
import Story from './components/Story/Story'
import StoryForm from './components/StoryForm/StoryForm'
import Home from './components/Home/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
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
      console.log('List of stories', res)
      setStories(res.data)
    })
    .catch(error => {
      console.log(error.message)
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
            <Route exact path='/login' render={props => <LoginForm {...props}/>} />
            <Route exact path='/stories' render={props => (
                <StoriesList {...props} stories={stories} fetchStories={fetchStories} /> 
                )} />
            <PrivateRoute exact path='/submitstory' component={SubmitStory} />
            <Route exact path='/stories/:id' render={props => (
                <StoryForm {...props} stories={stories} updateStories={setStories} />
              )} />
            <Route exact path='/stories:id' render={props => (
                <Story {...props} stories={stories} updateStories={setStories} />
              )} />
      </section>
    </div>
  );
}

export default withRouter(App);
