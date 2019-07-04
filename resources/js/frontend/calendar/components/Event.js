import React from 'react';

const Event = ({userLanguage = 'it', event}) => {

  return (
    <div className='mostra_evento'>
      <h3>{userLanguage == 'it' ? 'Nome evento' : 'Event name'}:<br/>{userLanguage == 'it' ? event.title_it : event.title_en}</h3>
    </div>
  )


}

export default Event;
