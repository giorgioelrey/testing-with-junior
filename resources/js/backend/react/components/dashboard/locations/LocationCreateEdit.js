import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import LocationForm from './LocationForm';
import ErrorsAlert from './../../ErrorsAlert';
import LocationConnector from './../../../HOCs/LocationConnector';

const LocationCreateEdit =  ({location, mnLocation = {}, categories, streets, updateLocation, submitLocation, history, locationId, section }) => {

  const [submissionErrors, setSubmissionErrors] = useState([]);

  const locationSubmit = async (fields) => {

/*
        TO USE IF RESTORING GOOGLE AUTOCOMPLETE ADDRESS FIELD

      if (section == 'create'){
        fields.latitude = fields.address.coordinates.lat;
        fields.longitude = fields.address.coordinates.lng;
        fields.address = fields.address.address;
      }

      if (section == 'update'){
        const updateWithDifferentAddress = (fields.address.address && fields.address.coordinates && fields.address.address !== mnLocation.address)

        if (updateWithDifferentAddress){
          console.log('address is different',fields.address.address !== mnLocation.address)
          fields.latitude = fields.address.coordinates.lat;
          fields.longitude = fields.address.coordinates.lng;
          fields.address = fields.address.address;
        } else {
          console.log('updating location with same address');
          fields.latitude = mnLocation.latitude;
          fields.longitude = mnLocation.longitude;
          fields.address = mnLocation.address ;
        }
      }
 */

    let formData = new FormData();
    for (var key in fields) {
      formData.append( key, fields[key] )
    }

    try {

      const {data} = await (section === 'create' ?  submitLocation(formData) : updateLocation(formData));

      history.push('/admin/dashboard/locations');

    } catch(error){

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-news-page">

              <h1>{section === 'create' ? 'Crea' : 'Modifica'} location</h1>
              {submitErrors}

                <LocationForm
                onSubmit={locationSubmit}
                location={mnLocation}
                section={section}
                categories={categories}
                streets={streets}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(LocationConnector(LocationCreateEdit));
