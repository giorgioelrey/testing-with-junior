import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

const LocationConnector = ((WrappedComponent) => {

    return class LocationLoader extends Component {

        constructor(props){

          super(props);

          this.state = {
            isLoading: true,
            locations: [],
            location: {},
            apiErrors: [],
            categories: []
          }

          this.getAllLocations = this.getAllLocations.bind(this);
          this.getLocation = this.getLocation.bind(this);
          this.deleteLocation = this.deleteLocation.bind(this);
          this.submitLocation = this.submitLocation.bind(this);
          this.updateLocation = this.updateLocation.bind(this);
          this.getCategories = this.getCategories.bind(this);

        }

        async componentDidMount(){

          console.log('hoc props', this.props)

            let apiResponse;
            const categories = await this.getCategories();

            console.log('categorie', categories)

            try {

              switch(this.props.section){

                case 'list': apiResponse = await this.getAllLocations();
                            console.log(apiResponse)
                             this.setState({ locations: apiResponse.data.locations, isLoading: false })
                             ; break;
                case 'show': case 'edit': apiResponse = await this.getLocation(this.props.postId)
                            this.setState({ location: apiResponse.data.location, isLoading: false, categories: categories.data.categories })
                            ; break;

                default: this.setState({ categories: categories.data.categories, isLoading: false });
              }

            } catch(error){

               console.log('hocs error call',error.response.data); this.setState({ apiErrors: [error.response.data.message]})
            }


        }

        getCategories(){
          return axios({
            url: `/api/admin/categories/entity/location`,
            method: 'get',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })
        }

        getAllLocations(){

          console.log('sto per fare la chiamata dal hoc locations')

         return axios({
           url: `/api/admin/locations/all`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })
       }

        getLocation(locationId){

         return axios({
           url: `/api/admin/location/${locationId}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        submitLocation(newLocation){

          return axios({
            url: '/api/admin/location/store',
            data: newLocation,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        updateLocation(updatedLocation){

          return axios({
            url: '/api/admin/location/update',
            data: updatedLocation,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        deleteLocation(locationId) {

          return axios({
            url: `/api/admin/location/destroy/${locationId}`,
            method: 'delete',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        render(){

          if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props} deleteLocation={this.deleteLocation} updateLocation={this.updateLocation} submitLocation={this.submitLocation}/>

        }

    }
  })

export default LocationConnector;
