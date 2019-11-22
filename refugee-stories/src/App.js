import React, { useState, useEffect } from 'react';
import { withRouter, Route, Link, Redirect } from 'react-router-dom'
import Navigation from './components/ArielComponents/navBar'
import Footer from './components/ArielComponents/footer'
import './App.css';

function App() {

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
