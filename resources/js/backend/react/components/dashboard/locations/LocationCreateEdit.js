import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import LocationForm from './LocationForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import ImageUploader from './ImageUploader';
import LocationConnector from './../../../HOCs/LocationConnector';

const LocationCreateEdit =  ({location, categories, updateLocation, submitLocation, history, locationId, section }) => {

  console.log('LocationCreateEdit', location);
  console.log('LocationCreateEdit categories', categories);
  const [submissionErrors, setSubmissionErrors] = useState([]);

  const locationSubmit = async (fields) => {

    try {

      const {data} = await (section === 'create' ?  submitLocation(fields) : updateLocation(fields));

      console.log('success', data);

      history.push('/admin/dashboard/locations/all');

    } catch(error){

      console.log('error submit', error);

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>{section === 'create' ? 'Create' : 'Edit'} your location</h1>
              {submitErrors}

                <ImageUploader />
                <LocationForm
                onSubmit={locationSubmit}
                location={location}
                categories={categories}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(LocationConnector(LocationCreateEdit));
