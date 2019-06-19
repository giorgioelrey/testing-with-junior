import React from 'react';
import axios from 'axios';


class PressList extends React.Component{


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
      url: `/api/press`,
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

        {this.state.press.length > 0 && this.state.press.map((press, idx) =>(

<div key={idx} className='col-md-4'>

<h1>{press.title} </h1>
  <p>{press.address}</p>

</div>



)) || (<div>no post.</div>)}

      </React.Fragment>
    )

  }




}

export default PressList
