import React from 'react';
import Event from './Event';

const EventsList = ({events = [], date, userLanguage} ) => {

  return (
    <div>
      <h1 className='data'>Data: {date}</h1>
      { events.length > 0 &&
        events.map((event, idx) => (
            <Event key={idx} event={event} userLanguage={userLanguage}/>
          )) || <p className='mess_data'>Nessun evento da mostrare</p>
      }
    </div>

  )


}

export default EventsList;
