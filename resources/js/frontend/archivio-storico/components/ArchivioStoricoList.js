import React from 'react';
import axios from 'axios';


class ArchivioStoricoList extends React.Component{


  constructor(props){

    super(props); //carica le props

    //definisci lo state

    this.state = {
      press: [],
      apiErrors: []
    }

  }

  componentDidMount(){

    axios({
      url: `/api/archivio-storico`,
      method: 'get',
      headers: { 'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
    })
    .then(({data}) => {

      console.log('press found', data.archivio);

      this.setState({archivio: data.archivio});

    })
    .catch(error => {
      console.log(error.response.data.message)
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.press.length > 0 && this.state.press.map((archivio, idx) =>(

<div key={idx} className='col-md-4'>

<h1>{archivio.title} </h1>
  <p>{archivio.address}</p>

</div>



)) || (<div>no post.</div>)}

      </React.Fragment>
    )

  }




}

export default ArchivioStoricoList
