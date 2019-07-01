import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import EventConnector from './../../../HOCs/EventConnector';
import placeholder_post_image from './../../../assets/placeholder_post_image.png';


const EventsShow = ({event, deleteEvent, history}) => {

  console.log(event)

  const deleteCurrentEvent = (id) => {

    //axios call for deletion
    deleteEvent(id)
      .then(({data}) => {

        console.log('success', data);
        history.push('/admin/dashboard/events');

      })
      .catch((error) => {

        console.log('deletion error', error);
      })

  }

    return (
      <Fragment>
        <div className="card mb-3">
          <img src={event && event.image || placeholder_post_image} className="card-img-top" alt="..." style={{maxWidth: '100%'}}/>
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <h3>{event.subtitle}</h3>
            <p>{event.date}</p>
            <p className="card-text">{event.description}</p>
            <p className="card-text"><small className="text-muted">{event.created_at}</small></p>

              <Link to={`/admin/dashboard/event/edit/${event.id}`} className="btn btn-warning btn-lg mr-3">Edit this event</Link>
            <a onClick={deleteCurrentEvent.bind(this, event.id)} className="btn btn-danger btn-lg text-white">Delete this event</a>


          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(EventConnector(EventsShow));
