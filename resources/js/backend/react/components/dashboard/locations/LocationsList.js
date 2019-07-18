import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import LocationCard from './LocationCard';
import LocationConnector from './../../../HOCs/LocationConnector';

const NewsList  = ({locations = []}) => (

  <React.Fragment>

      <div className="d-flex justify-content-between align-items-center mb-3 w-75 flex-wrap">
        <h1>Here's all your Locations</h1>
        <Link to="/admin/dashboard/locations/create" className="btn btn-primary btn-lg">Add a new Location</Link>
      </div>

      <div className="row">
          {locations.length > 0 && locations.map((location, idx) => (<LocationCard key={idx} location={location} />)) ||
                        (<h2>No locations to show</h2>)}
      </div>


  </React.Fragment>

);


export default LocationConnector(NewsList);
