import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';

ReactDOM.render(<Search
                  userLanguage={userLanguage}
                />,
                document.getElementById('search'));
