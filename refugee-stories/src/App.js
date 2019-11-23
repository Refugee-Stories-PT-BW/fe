import React, { useState, useEffect } from 'react';
import { withRouter, Route, Link, Redirect } from 'react-router-dom'
import Navigation from './components/ArielComponents/navBar'
import Footer from './components/ArielComponents/footer'
//import SubmitStory from './components/SubmitStory/SubmitStory'
//import LoginForm from './components/LoginForm/LoginForm'
//import Register from './components/Register/Register'
//import StoriesList from './components/StoriesList/StoriesList'
//import PendingStories from './components/PendingStories/PendingStories'
//import Admin from './components/Admin/Admin'
//import Connect from './components/Connect/Connect'
// import Story from './components/Story/Story'
// import StoryForm from './components/StoryForm/StoryForm'
//import Home from './components/Home/Home'
//import PrivateRoute from './components/PrivateRoute/PrivateRoute'
//import { getToken } from './utils/api'
//import { useSelector, useDispatch } from 'react-redux'
//import { fetchStoriesPendingData, fetchStoriesData } from './actions'
// import api from './utils/api'
import './App.css';

function App() {
  
  // const dispatch = useDispatch()

  return (
    <div className="App">
      <section className='app-header'>

        <Navigation />

        <Footer />
        
      </section>
    </div>
  );
}

export default withRouter(App);
