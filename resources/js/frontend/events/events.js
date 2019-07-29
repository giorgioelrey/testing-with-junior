import React from 'react';
import ReactDOM from 'react-dom';
import EventsList from './components/EventsList';

ReactDOM.render(<EventsList userLanguage={userLanguage}/>, document.getElementById('events-list'));
