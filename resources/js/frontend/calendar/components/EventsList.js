import React from 'react';
import Event from './Event';

const EventsList = ({events, date} ) => {

  return (
    <div className='mostra_evento'>
      <h1>Data: {date}</h1>
      { events.length > 0 &&
        events.map((event, idx) => (
            <Event key={idx} event={event}/>
          )) || <p>Nessun evento da mostrare</p>
      }
    </div>

  )


}

export default EventsList;
