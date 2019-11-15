import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SubmitStory from './components/SubmitStory/SubmitStory'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/Register/Register'
import TabNav from './components/TabNav/TabNav'

import './App.css';


function App() {
  return (
    <div className="App">
      <section className='app-header'>
          <h1>Refugee Stories</h1>
      <Router>
          <Switch>
              <Route exact path='/' render={props => <TabNav {...props}/>} />
              <Route path='/submitstory' render={props => <SubmitStory {...props}/>} />
              <Route path='/admin' render={props => <LoginForm {...props}/>} />
              <Route path='/register' render={props => <Register {...props}/>} />
          </Switch>
      </Router>
      </section>
    </div>
  );
}

export default App;
