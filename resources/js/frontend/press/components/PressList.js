import React from 'react';
import axios from 'axios';


class PressList extends React.Component{


  constructor(props){

    super(props); //carica le props

    //definisci lo state

    this.state = { press: [], apiErrors: [] };

  }

  componentDidMount(){

    axios({
      url: `/api/posts/press`,
      method: 'get',
      headers: { 'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
    })
    .then(({data}) => {

      console.log('press found', data.press);

      this.setState({press: data.press});

    })
    .catch(error => {
      console.log(error.response.data.message)
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.press.length > 0 && this.state.press.map((pressPost, idx) =>{

          const link = userLanguage == 'it' ? `/it/press/${pressPost.slug_it}` : `/en/press/${pressPost.slug_en}`;

          return (

            <div key={idx} className='col-md-4'>

              <img className="img-fluid" src={pressPost.image_url} alt="no image" />
              <div className='corpo-post'>
              <a href={link}>
                <h1>{userLanguage =='it' ? pressPost.title_it : pressPost.title_en}</h1>
              </a>


              <p>{userLanguage =='it' ? pressPost.postbodytop_it : pressPost.postbodytop_en}</p>
              </div>
            </div>

  )}) || (<div>No press posts available</div>)}

      </React.Fragment>
    )

  }




}

export default PressList;
