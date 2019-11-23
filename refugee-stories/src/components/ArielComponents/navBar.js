import React, { useState } from "react";
import { withRouter, Route, Link, Redirect } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { getToken } from '../../utils/api.js'
import { Image, Menu, Dropdown, Button, Container } from "semantic-ui-react";

import Register from '../Register'
import Login from '../LoginForm/LoginForm'
import SubmissionField from './submissionField'
import SubmitStory from '../SubmitStory/SubmitStory'
import Pending from '../Pending'
import Home from '../Home/Home'
import Connect from '../Connect/Connect'

function navBar(props) {

  const signedIn = getToken()

  const Logout = () => {
    localStorage.removeItem('token')
    return <Redirect to='/login' />
  }

  return (
    <Container style={{ width: "100%" }}>
      <Menu stackable size="huge" style={{ margin: "0" }}>
        <Menu.Item>
          <img
            src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png"
            alt="Logo"
          />
        </Menu.Item>
        
        <Link to='/' style={{ display: 'flex' }}>
          <Menu.Item name="home">Home</Menu.Item>
        </Link>

        <Link to="/stories" style={{ display: "flex" }}>
          <Menu.Item name="stories">Stories</Menu.Item>
        </Link>

        <Link to='/connect' style={{display: "flex" }}>
          <Menu.Item name="connet">Connect</Menu.Item>
        </Link>

        {signedIn && <Link to='/submitstory' style={{ display: 'flex' }}>
          <Menu.Item name="submitstory">Submit a Story</Menu.Item>
        </Link>}

        {signedIn && <Link to='/pending' style={{ display: 'flex' }}>
          <Menu.Item name="pending">Pending Stories</Menu.Item>
        </Link>}

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Arabic</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            { !signedIn && <Link to="/login">
              <Button primary>Log In/Register</Button>
            </Link>}
            { signedIn && <Link to="/logout">
              <Button primary>Logout</Button>
            </Link>}
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Image src='https://i.ibb.co/c8T58vV/Nav-Menu-Photo.jpg' alt='Beach Full of empty boats' fluid/>

      <Route exact path='/' component={Home} />
      <Route exact path='/register' render={props => <Register {...props}/>} />
      <Route exact path='/login' render={props => <Login {...props}/>} />
      <Route exact path='/stories' render={props => (
          <SubmissionField/> 
      )} />
      <PrivateRoute exact path='/submitstory' component={SubmitStory} />
      <Route exact path='/pending' render={props => (
          <Pending /> 
          )} />
      <PrivateRoute exact path='/logout' component={Logout} />
      <Route exact path='/connect' component={Connect}/>

    </Container>
  );
}

export default navBar