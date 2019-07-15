import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import LocationConnector from './../../../HOCs/LocationConnector';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const LocationShow = ({location, deleteLocation, history}) => {

  const deleteSingleLocation = (id) => {

    //axios call for deletion
    deleteLocation(id)
      .then(({data}) => {

        console.log('success', data);
        history.push('/admin/dashboard/locations/all');

      })
      .catch((error) => {

        console.log('error submit', error);

      })

  }

    return (
      <Fragment>
        <div className="card mb-3">
          <img src={location && location.image || placeholder_location_image} className="card-img-top" alt="..." style={{maxWidth: '100%'}}/>
          <div className="card-body">
            <h5 className="card-title">{location.name_it}</h5>
            <p className="card-text">{location.description_it}</p>
            <p className="card-text"><small className="text-muted">{location.created_at}</small></p>

              <Link to={`/admin/dashboard/news/edit/${location.id}`} className="btn btn-warning btn-lg mr-3">Edit this location</Link>
            <a onClick={deleteSingleLocation.bind(this, location.id)} className="btn btn-danger btn-lg text-white">Delete this location</a>


          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(LocationConnector(LocationShow));
