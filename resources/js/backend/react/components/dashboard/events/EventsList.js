import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import EventCard from './EventCard';
import EventConnector from './../../../HOCs/EventConnector';

const EventsList  = ({events}) => (

  <Fragment>

      <div className="d-flex justify-content-between align-items-center mb-3 w-75 flex-wrap">
        <h1>Here's all your events</h1>
        <Link to="/admin/dashboard/events/create" className="btn btn-primary btn-sm">Add a new Event</Link>
      </div>


          {events.length > 0 &&
            events.map((event, idx) => (<EventCard key={idx} event={event} />)) ||
                        (<h2>No events to show</h2>)}



  </Fragment>

);


export default EventConnector(EventsList);
