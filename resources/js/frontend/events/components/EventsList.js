import React from 'react';
import axios from 'axios';


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

      console.log('events found', data.events);

      this.setState({events: data.events});

    })
    .catch(error => {
      console.log(error.response.data.message)
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.events.length > 0 && this.state.events.map((event, idx) =>(

            <div key={idx} className='col-md-4'>
              <img className="img-fluid" src={event.image_url} alt="no image" />
              <div className='corpo-post'>
              <h1>{userLanguage =='it' ? event.title_it : event.title_en} </h1>

              <p>{event.address}</p>

              </div>
            </div>



)) || (<div>no post.</div>)}

      </React.Fragment>
    )

  }




}

export default EventsList
