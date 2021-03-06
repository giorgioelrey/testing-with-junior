import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import EventForm from './EventForm';
import {Link} from 'react-router-dom';
import ErrorsAlert from './../../ErrorsAlert';
import moment from 'moment';
import EventConnector from './../../../HOCs/EventConnector';

const EventCreateEdit =  ({event, updateEvent, submitEvent, history, pagesAvailable, eventId, section }) => {


  const [submissionErrors, setSubmissionErrors] = useState([]);

  const eventSubmit = async (fields) => {

    try {

      fields.start_date = moment(fields.start_date).format('YYYY-MM-DD');
      fields.start_time = moment(fields.start_time).format('YYYY-MM-DD HH:mm:ss');
      fields.end_date = moment(fields.end_date).format('YYYY-MM-DD');
      fields.end_time = moment(fields.end_time).format('YYYY-MM-DD HH:mm:ss');

      let formData = new FormData();

      for (var key in fields) {

        formData.append( key, fields[key] )
      }

      const {data} = await (section === 'create' ?   submitEvent(formData) : updateEvent(formData));

      history.push('/admin/dashboard/events');

    } catch(error){

      setSubmissionErrors([error.response.data.message]);

    }

  }

  let submitErrors = submissionErrors.length > 0 && (<ErrorsAlert errors={submissionErrors} />) || null;

  return (
    <Fragment>
      <div className="container" id="create-edit-event-page">

              <h1>{section === 'create' ? 'Crea' : 'Modifica'} evento</h1>
              {submitErrors}

                <EventForm
                onSubmit={eventSubmit}
                pagesAvailable={pagesAvailable}
                event={event}
                section={section}
                />

      </div>
    </Fragment>
  );

}

export default withRouter(EventConnector(EventCreateEdit));
