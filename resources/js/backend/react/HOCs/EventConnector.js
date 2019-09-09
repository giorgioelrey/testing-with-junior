import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

const EventConnector = ((WrappedComponent) => {

    return class EventsManager extends Component {

        constructor(props){

          super(props);


          this.state = { isLoading: true, events: [], event:{}, apiErrors: [] }

          this.getAllEvents = this.getAllEvents.bind(this);
          this.getEventById = this.getEventById.bind(this);
          this.getEventsByMonth = this.getEventsByMonth.bind(this);
          this.deleteEvent = this.deleteEvent.bind(this);
          this.submitEvent = this.submitEvent.bind(this);
          this.updateEvent = this.updateEvent.bind(this);

        }

        async componentDidMount(){

          let apiResponse;

          try {

            switch(this.props.section){

              case 'list': apiResponse = await this.getAllEvents();

                           this.setState({ events: apiResponse.data.events, isLoading: false })
                           ; break;
              case 'show': case 'edit': apiResponse = await this.getEventById(this.props.eventId)
                          this.setState({ event: apiResponse.data.event, isLoading: false })
                          ; break;
              case 'show-by-month': apiResponse = await this.getEventsByMonth(this.props.month)
                          this.setState({ events: apiResponse.data.events, isLoading: false })
                          ; break;

              default: this.setState({ isLoading: false }); break;
            }

          } catch(error){

             this.setState({ apiErrors: [error.response.data.message]})
          }

        }

        getAllEvents(){

         return axios({
           url: `/api/admin/events/all`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })


       }

        getEventById(eventId){

         return axios({
           url: `/api/admin/event/show/id/${eventId}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        getEventsByMonth(month){

         return axios({
           url: `/api/admin/events/show/by-month/${month}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        submitEvent(newEvent){

          return axios({
            url: '/api/admin/event/store',
            data: newEvent,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        updateEvent(updatedEvent){

          return axios({
            url: '/api/admin/event/update',
            data: updatedEvent,
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }

        deleteEvent(eventId) {

          return axios({
            url: `/api/admin/event/destroy/${eventId}`,
            method: 'delete',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization' : 'Bearer ' + this.props.user.token},
            responseType: 'json',
          })

       }


        render(){

          if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props} deleteEvent={this.deleteEvent} updateEvent={this.updateEvent} submitEvent={this.submitEvent}/>

        }

    }
  })

export default EventConnector;
