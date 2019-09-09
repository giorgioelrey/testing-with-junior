import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ItemCard from './../../common/ItemCard';

export default class Search extends Component {

  constructor(props){
    super(props);


    this.state = {
      query: '',
      queryResults: [],
      searchDone: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async getResults(query){

    try {

      const {data} = await axios({
        url: `/api/search/${query}`,
        method: 'get',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        responseType: 'json',
      });

      //prevents failing from results being an object
      if (!Array.isArray(data.results)){
        data.results =  Object.values(data.results)
      }

      this.setState({queryResults: data.results, searchDone: true});

      } catch (error) {
      }

    }

    handleSubmit(e){
      e.preventDefault();

      this.getResults(this.state.query);

      e.target.reset();

    }

    handleChange(e) {

      this.setState({ [e.target.name]: e.target.value, searchDone:false })
    }

    render(){

      const {queryResults, query, searchDone} = this.state;

      return (
        <Fragment>
<div className="row d-flex justify-content-center">
          <div className="col-md-10 mt-5">
            <form className="form-inline my-5" onSubmit={this.handleSubmit}>

              <div className="input-group mb-3">
                <input type="text" className="form-control" name="query" value={this.state.query} placeholder={userLanguage == 'it' ? 'Cerca' : 'Search'} aria-label={userLanguage == 'it' ? 'Digita la tua ricerca' : 'Type your search'} aria-describedby="basic-addon2" onChange={this.handleChange}/>

                <div className="input-group-append">
                  <button type="submit" className="cerca btn btn-outline-secondary cerca_botton">
                  {userLanguage == 'it' ? 'Cerca' : 'Search'}
                  </button>
                </div>
              </div>

            </form>
            </div>
</div>
            <h1>{userLanguage == 'it' ? 'Cerca' : 'Find'}: {query}</h1>
            <div className="container">
              <div className="row">
              { queryResults.length > 0 && queryResults.map((item, index) => <ItemCard
                key={index}
                type={item.type}
                item={item}
                userLanguage={userLanguage}
               />) ||
               <p>{userLanguage == 'it' ? 'Nessun risultato per la tua ricerca' : 'No results for your query'}</p>}
               </div>
            </div>

        </Fragment>
      )
    }

  }
