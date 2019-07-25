import React from 'react';
import ReactDOM from 'react-dom';
import GmapApp from './components/GmapApp';

ReactDOM.render(<GmapApp locations={locations} userLanguage={userLanguage}/>, document.getElementById('map'));
