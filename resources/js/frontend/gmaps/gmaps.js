import React from 'react';
import ReactDOM from 'react-dom';
import GmapApp from './components/GmapApp';

ReactDOM.render(<GmapApp locations={locations}/>, document.getElementById('map'));
