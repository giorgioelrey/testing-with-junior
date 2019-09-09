import React from 'react';
import axios from 'axios';
import ItemCard from './../../common/ItemCard';

class ArchivioStoricoList extends React.Component{


  constructor(props){

    super(props);

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

      this.setState({archive: data.archive});

    })
    .catch(error => {
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.archive.length > 0 && this.state.archive.map((archivePost, idx) => (
          <ItemCard
            key={idx}
            type="archivio"
            item={archivePost}
            userLanguage={userLanguage}
           />
          )
      ) || (<div>{userLanguage === 'it' ? 'Nessun post per Archivio Storico' : 'No Heritage-Archive Posts'}</div>)}

      </React.Fragment>
    )

  }




}

export default ArchivioStoricoList;
