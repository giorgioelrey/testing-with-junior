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
            mnLocation: {},
            apiErrors: [],
            categories: [],
            streets: []
          }

          this.getAllLocations = this.getAllLocations.bind(this);
          this.getLocation = this.getLocation.bind(this);
          this.deleteLocation = this.deleteLocation.bind(this);
          this.submitLocation = this.submitLocation.bind(this);
          this.updateLocation = this.updateLocation.bind(this);
          this.getCategories = this.getCategories.bind(this);
          this.getStreets = this.getStreets.bind(this);

        }

        async componentDidMount(){

            let apiResponse;
            const categories = await this.getCategories();
            const streets = await this.getStreets();

            try {

              switch(this.props.section){

                case 'list': apiResponse = await this.getAllLocations();

                             this.setState({ locations: apiResponse.data.locations, isLoading: false })
                             ; break;
                case 'show': case 'edit': apiResponse = await this.getLocation(this.props.locationId)

                            this.setState({ mnLocation: apiResponse.data.location, isLoading: false, categories: categories.data.categories, streets: streets.data.streets })
                            ; break;

                default: this.setState({ categories: categories.data.categories, streets: streets.data.streets, isLoading: false });
              }

            } catch(error){

              this.setState({ apiErrors: [error.response.data.message]})
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
        getStreets(){
          return axios({
            url: `/api/admin/streets`,
            method: 'get',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })
        }

        getAllLocations(){

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
