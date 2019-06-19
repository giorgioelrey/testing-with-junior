//React, React-> Component, ReactDOM
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Main App Component
import App from './components/App';

if (document.getElementById('app')) {
    ReactDOM.render(
      <Router>
          <App />
      </Router>
      , document.getElementById('app'));
}
