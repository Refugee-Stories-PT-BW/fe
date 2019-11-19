import React, { useState } from 'react';
import { withRouter, Route, Link, Redirect } from 'react-router-dom'
import SubmitStory from './components/SubmitStory/SubmitStory'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/Register/Register'
import StoriesList from './components/StoriesList/StoriesList'
import PendingStories from './components/PendingStories/PendingStories'
import Admin from './components/Admin/Admin'
// import Story from './components/Story/Story'
// import StoryForm from './components/StoryForm/StoryForm'
import Home from './components/Home/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { getToken } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchStoriesData, postStoryData, deleteStory, editStory } from './actions'
// import api from './utils/api'
import './App.css';


function App() {
  const signedIn = getToken()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const[stories, setStories] = useState([])

 
  const Logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
          <nav>
            <Link to='/'>Home</Link>
            {!signedIn && <Link to='/register'>Register</Link>}
            {!signedIn && <Link to='/login'>Login</Link>}
            {!signedIn && <Link to='/admin'>Admin</Link>}
            {signedIn && <Link to='/submitstory'>Submit a Story</Link>}
            {signedIn && <Link to='/stories'>Stories</Link>}
            {signedIn && <Link to='/pending'>Pending</Link>}
            {signedIn && <Link to='/logout'>Logout</Link>}
          </nav>

            <Route exact path='/' component={Home} />
            <Route exact path='/register' render={props => <Register {...props}/>} />
            <Route exact path='/login' render={props => <LoginForm {...props}/>} />
            <Route exact path='/stories' render={props => (
                <StoriesList {...props} stories={stories}  updateStories={setStories}/> 
                )} />
            <Route exact path='/admin' render={props => <Admin {...props} />} />
            <PrivateRoute exact path='/submitstory' component={SubmitStory} />
            <Route exact path='/pending' render={props => (
                <PendingStories {...props} stories={stories}  updateStories={setStories}/> 
                )} />
            <PrivateRoute exact path='/logout' component={Logout} />
            {/* <Route exact path='/stories/:id' render={props => (
                <Story {...props} stories={stories} updateStories={setStories} />
              )} /> */}
      </section>
    </div>
  );
}

export default withRouter(App);
