import React from 'react';

const Event = (props) => {

  return (
    <div className='mostra_evento'>
      <h3>Nome evento:<br/>{props.event.title}</h3>
    </div>
  )


}

export default Event;
