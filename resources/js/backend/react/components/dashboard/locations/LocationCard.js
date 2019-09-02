import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const LocationCard = ({ location }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">
      <div className="card"  style={{overflow: 'hidden', position:'relative'}}>
          <div className="card-img-top text-center" style={{overflow: 'hidden', height: '250px'}}>
        <img src={location && location.image_url || placeholder_post_image} className="card-img-top" alt="...where is the image" style={{position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',height: '250px', width: 'auto'}}/>
          </div>
        <div className="card-body">
          <h5 className="card-title">{location.name_it || 'Sample title'}</h5>
          {/*<p className="card-text">{location.description_it || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>*/}
            <Link to={`/admin/dashboard/location/show/${location.id}`} className="btn btn-primary ">Apri</Link>
            <Link to={`/admin/dashboard/location/edit/${location.id}`} className="btn btn-warning  ml-3">Modifica</Link>
        </div>
      </div>
    </div>
  )

};

export default LocationCard;
