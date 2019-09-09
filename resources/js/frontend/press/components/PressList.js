import React from 'react';
import axios from 'axios';
import ItemCard from './../../common/ItemCard';

class PressList extends React.Component{


  constructor(props){

    super(props);

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

      this.setState({press: data.press});

    })
    .catch(error => {
    })

  }


  render(){

    return(
      <React.Fragment>

        {this.state.press.length > 0 && this.state.press.map((pressPost, idx) =>(
          <ItemCard
            key={idx}
            type="press"
            item={pressPost}
            userLanguage={userLanguage}
           />
          )
      ) || (<div>No press posts available</div>)}

      </React.Fragment>
    )

  }




}

export default PressList;
