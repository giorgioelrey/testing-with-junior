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
        <div className="show-card card mb-3 border-dark">
          <img src={event && event.image_url || placeholder_post_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Titolo<br/>{event.title_it}</h5>
              <hr/>
            <p>Da {event.start_date} a {event.end_date}</p>
              <hr/>
            <p className="card-text" dangerouslySetInnerHTML={{ __html:'<h5>Descrizione Superiore IT</h5><br>' + event.bodytop_it}}></p>
              <hr/>
              <div className="d-flex justify-content-around flex-sm-none">
              <Link to={`/admin/dashboard/event/edit/${event.id}`} className="btn btn-warning  mr-3">Modifica evento</Link>
            <a onClick={deleteCurrentEvent.bind(this, event.id)} className="btn btn-danger  text-white">Cancella evento</a>
              </div>


          </div>
        </div>
      </Fragment>
    );


}

export default withRouter(EventConnector(EventsShow));
