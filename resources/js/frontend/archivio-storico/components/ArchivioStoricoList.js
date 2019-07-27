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

      console.log('archive found', data);

      this.setState({archive: data.archive});

    })
    .catch(error => {
      console.log(error.response.data.message)
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.archive.length > 0 && this.state.archive.map((archivePost, idx) => {

          const link = userLanguage == 'it' ? `/it/archivio-storico/${archivePost.slug_it}` : `/en/heritage-archive/${archivePost.slug_en}`;

            return (

                <div key={idx} className='col-md-4'>
                      <div className='box'>
                    <img className="img-box" src={archivePost.image_url} alt="no image" />
                    </div>
                    <div className='corpo-post'>

                    <a href={link}>
                      <h1>{userLanguage =='it' ? archivePost.title_it : archivePost.title_en} </h1>
                    </a>


                    <p dangerouslySetInnerHTML={{__html: userLanguage =='it' ? archivePost.postbodytop_it : archivePost.postbodytop_en}}/>
                  </div>
                </div>

              );
        }
      ) || (<div>{userLanguage === 'it' ? 'Nessun post per Archivio Storico' : 'No Heritage-Archive Posts'}</div>)}

      </React.Fragment>
    )

  }




}

export default ArchivioStoricoList;
