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
    <div className='mostra_evento p-2 position-relative'>
      <a href={link} style={{position: 'absolute', width: '100%', height: '100%' }}></a>
      <h2 style={{fontSize: '18px', color: 'black',marginBottom: 0}}>{event['title_'+userLanguage]}</h2>
      <p style={{fontSize: '16px',  lineHeight: '18px',marginBottom: 0}}>{event.address}</p>
      

    </div>
  )


}

export default Event;
