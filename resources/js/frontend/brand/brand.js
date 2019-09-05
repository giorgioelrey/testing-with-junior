import React from 'react';
import ReactDOM from 'react-dom';
import BrandLocationPicker from './components/BrandLocationPicker';
import HotelPicker from './components/HotelPicker';

ReactDOM.render(<BrandLocationPicker
    streets={streets}
    userLanguage={userLanguage}
    closeModalImg={closeModalImg}
/>, document.getElementById('brand-location-picker'));

ReactDOM.render(<HotelPicker

    userLanguage={userLanguage}
    closeModalImg={closeModalImg}
/>, document.getElementById('hotel-picker'));
