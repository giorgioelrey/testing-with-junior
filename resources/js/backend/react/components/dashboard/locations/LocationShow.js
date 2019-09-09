import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import LocationConnector from './../../../HOCs/LocationConnector';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const LocationShow = ({mnLocation, deleteLocation, history}) => {

  const deleteSingleLocation = (id) => {

    //axios call for deletion
    deleteLocation(id)
      .then(({data}) => {

        history.push('/admin/dashboard/locations');

      })
      .catch((error) => {

      })

  }

    return (
      <Fragment>
        <div className="card mb-3">
          <img src={mnLocation && mnLocation.image_url || placeholder_post_image} className="card-img-top" alt="..." style={{maxWidth: '100%'}}/>
          <div className="card-body">
            <h5 className="card-title">{mnLocation.name_it}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html:mnLocation.description_it}}></p>
            <p className="card-text"><small className="text-muted">{mnLocation.created_at}</small></p>
            <div className="d-flex justify-content-around flex-sm-none">
              <Link to={`/admin/dashboard/location/edit/${mnLocation.id}`} className="btn btn-warning  mr-3">Modifica location</Link>
            <a onClick={deleteSingleLocation.bind(null, mnLocation.id)} className="btn btn-danger  text-white">Elimina location</a>
            </div>

          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(LocationConnector(LocationShow));
