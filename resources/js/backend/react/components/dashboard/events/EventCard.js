import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const EventCard = ({ event }) => {

  return (
    <div className="col-md-6 col-xl-4 px-2 mb-5">

      <div className="card">
        <img src={event && event.image || placeholder_post_image} className="card-img-top" alt="...where is the image"/>
        <div className="card-body">
          <h5 className="card-title">{event.title || 'Sample title'}</h5>
          <h3>{event.date}</h3>
          <h3>{event.subtitle || 'Sample subtitle'}</h3>
          <p className="card-text">{event.description || 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</p>
            <Link to={`/admin/dashboard/event/show/id/${event.id}`} className="btn btn-primary btn-lg">Open</Link>
            <Link to={`/admin/dashboard/event/edit/${event.id}`} className="btn btn-warning btn-lg ml-3">Edit this event</Link>
        </div>
      </div>

    </div>
  )

};

export default EventCard;
