import React from 'react';
import axios from 'axios';
import ItemCard from './../../common/ItemCard';

class EventsList extends React.Component{


  constructor(props){

    super(props); //carica le props

    //definisci lo state

    this.state = {
      events: [],
      apiErrors: []
    }

  }

  componentDidMount(){

    axios({
      url: `/api/events`,
      method: 'get',
      headers: { 'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
    })
    .then(({data}) => {

      this.setState({events: data.events});

    })
    .catch(error => {
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.events.length > 0 && this.state.events.map((event, idx) =>(
          <ItemCard
            key={idx}
            type="eventi"
            item={event}
            userLanguage={userLanguage}
           />
          )
) || (<div>Nessun Evento </div>)}

      </React.Fragment>
    )

  }




}

export default EventsList
