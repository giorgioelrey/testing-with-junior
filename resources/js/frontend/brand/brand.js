import React from 'react';
import ReactDOM from 'react-dom';
import BrandLocationPicker from './components/BrandLocationPicker';

ReactDOM.render(<BrandLocationPicker
    streets={streets}
    userLanguage={userLanguage}
    closeModalImg={closeModalImg}
/>, document.getElementById('brand-location-picker'));
