import React from 'react';
import Event from './Event';

const EventsList = ({events, date} ) => {

  return (
    <div>
      <h1>Hai selezionato {date}</h1>
      { events.length > 0 &&
        events.map((event, idx) => (
            <Event key={idx}>{event.title} </Event>
          )) || <p>Nessun evento da mostrare</p>
      }
    </div>

  )


}

export default EventsList;
