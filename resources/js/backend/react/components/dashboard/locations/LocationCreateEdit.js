import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import LocationForm from './LocationForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import ImageUploader from './ImageUploader';
import LocationConnector from './../../../HOCs/LocationConnector';

const LocationCreateEdit =  ({location, mnLocation = {}, categories, updateLocation, submitLocation, history, locationId, section }) => {

  console.log('LocationCreateEdit', mnLocation);
  console.log('LocationCreateEdit categories', categories);
  const [submissionErrors, setSubmissionErrors] = useState([]);

  const locationSubmit = async (fields) => {

      console.log('data from location form', fields)
      console.log('mnLocation location form', mnLocation)

    if (fields.address.address && fields.address.address !== mnLocation.address){
      console.log('address is different',fields.address.address !== mnLocation.address)
      fields.latitude = fields.address.coordinates.lat;
      fields.longitude = fields.address.coordinates.lng;
      fields.address = fields.address.address;
    }

    console.log('preparing field in formData',  fields);
    let formData = new FormData();
    for (var key in fields) {
      console.log(key,fields[key])
      formData.append( key, fields[key] )
    }

    console.log('fullForm Data file', formData.get('image_url'))

    try {

      const {data} = await (section === 'create' ?  submitLocation(formData) : updateLocation(formData));

      console.log('success', data);

      history.push('/admin/dashboard/locations');

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

                <LocationForm
                onSubmit={locationSubmit}
                location={mnLocation}
                section={section}
                categories={categories}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(LocationConnector(LocationCreateEdit));
