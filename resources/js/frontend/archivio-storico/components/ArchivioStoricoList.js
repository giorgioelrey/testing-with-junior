import React from 'react';
import axios from 'axios';


class ArchivioStoricoList extends React.Component{


  constructor(props){

    super(props); //carica le props

    //definisci lo state

    this.state = { archive: [], apiErrors: [] };

  }

  componentDidMount(){

    axios({
      url: `/api/posts/archive`,
      method: 'get',
      headers: { 'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
    })
    .then(({data}) => {

      console.log('archive found', data.archive);

      this.setState({archive: data.archive});

    })
    .catch(error => {
      console.log(error.response.data.message)
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.archive.length > 0 && this.state.archive.map((archivePost, idx) =>(

            <div key={idx} className='col-md-4'>

                <h1>{archivePost.title} </h1>

                <p>{archivePost.address}</p>

            </div>

          )) || (<div>{userLanguage === 'it' ? 'Nessun post per Press' : 'No press posts'}</div>)}

      </React.Fragment>
    )

  }




}

export default ArchivioStoricoList;
