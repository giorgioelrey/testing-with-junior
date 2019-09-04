import React from 'react';
import moment from 'moment';

const Event = ({userLanguage = 'it', event}) => {

  const itemTypeLoc = {
    eventi: {
      it: 'eventi',
      en: 'events'
    }
  };

  const link = `/${userLanguage}/${itemTypeLoc['eventi'][userLanguage]}/${event['slug_'+userLanguage]}`;

  return (
    <div className='mostra_evento  position-relative'>
      <a href={link} style={{position: 'absolute', width: '100%', height: '100%' }}></a>
      <h2 style={{marginBottom: 0}}>{event['title_'+userLanguage]}</h2>
      <p style={{marginBottom: 0}}>{event.address}</p>


    </div>
  )


}

export default Event;
