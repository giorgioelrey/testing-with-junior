import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const LocationCard = ({ location }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">
      <div className="card">
        <img src={location && location.thumbnail || placeholder_location_image} className="card-img-top" alt="...where is the image"/>
        <div className="card-body">
          <h5 className="card-title">{location.name_it || 'Sample title'}</h5>
          <p className="card-text">{location.description_it || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
            <Link to={`/admin/dashboard/location/show/${location.id}`} className="btn btn-primary btn-lg">Open</Link>
            <Link to={`/admin/dashboard/location/edit/${location.id}`} className="btn btn-warning btn-lg ml-3">Edit this location</Link>
        </div>
      </div>
    </div>
  )

};

export default LocationCard;
