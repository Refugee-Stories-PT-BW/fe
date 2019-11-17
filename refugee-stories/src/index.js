import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import { reducer } from './reducers'
import "semantic-ui-css/semantic.min.css";

// import './index.css';
import App from './App';

// const store =createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

