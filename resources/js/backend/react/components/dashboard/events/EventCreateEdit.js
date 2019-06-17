import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from './EventForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import EventConnector from './../../../HOCs/EventConnector';

const EventCreateEdit =  ({event, updateEvent, submitEvent, history, pagesAvailable, eventId, section }) => {


  const [submissionErrors, setSubmissionErrors] = useState([]);

  const eventSubmit = async (fields) => {

    try {

      const {data} = await (section === 'create' ?   submitEvent(fields) : updateEvent(fields));

      console.log('success', data);

      history.push('/admin/dashboard/events');

    } catch(error){

      console.log('error submit', error);

      setSubmissionErrors([error]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-event-page">

              <h1>{section === 'create' ? 'Create' : 'Edit'} your event</h1>
              {submitErrors}

                <EventForm
                onSubmit={eventSubmit}
                pagesAvailable={pagesAvailable}
                event={event}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(EventConnector(EventCreateEdit));
