import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';

const EventCard = ({ event }) => {

  return (
    <React.Fragment>
      <div className="row mb-3 p-4" id="event_list_back">
    <div className="col-md-3">
        <img src={event && event.image_url || placeholder_post_image} className="img_back" alt="...where is the image"/>


    </div>

    <div className="col-md-6 align-self-center">
      <h5 className="titolo_back">{event.title_it || 'Sample title'}</h5>
      <h3 className="data_back">Da {event.start_date} a {event.end_date}</h3>
    </div>

    <div className="col-md-3 align-self-center">
        <Link to={`/admin/dashboard/event/show/id/${event.id}`} className="btn btn-primary  mb-3">Apri</Link>
        <Link to={`/admin/dashboard/event/edit/${event.id}`} className="btn btn-warning  ">Modifica </Link>
  </div>
    </div>
  </React.Fragment>
  )

};

export default EventCard;
