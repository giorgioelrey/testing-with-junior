import React from 'react';
import Event from './Event';

const EventList = ({events} ) => {

  return (
    <div>
      { events.length > 0 &&
        events.map((event, idx) => (
            <Event key={idx}>{event.title} </Event>
          )) || <p>Nessun evento da mostrare</p>
      }
    </div>

  )


}

export default EventList;
