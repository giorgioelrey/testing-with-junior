import axios from 'axios';
import React, { Component } from "react";
import ErrorsAlert from './../components/ErrorsAlert';

const EventConnector = ((WrappedComponent) => {

    return class EventsManager extends Component {

        constructor(props){

          super(props);


          this.state = { isLoading: true, events: [], apiErrors: [] }

          this.getAllEvents = this.getAllEvents.bind(this);
          this.getEventById = this.getEventById.bind(this);
          this.getEventsByMonth = this.getEventsByMonth.bind(this);
          this.deleteEvent = this.deleteEvent.bind(this);
          this.submitEvent = this.submitEvent.bind(this);
          this.updateEvent = this.updateEvent.bind(this);

        }

        async componentDidMount(){

          console.log('hoc props componentnDidMount Event Connector', this.props)

          let apiResponse;

          try {

            switch(this.props.section){

              case 'list': apiResponse = await this.getAllEvents();
                          console.log(apiResponse)
                           this.setState({ events: apiResponse.data.events, isLoading: false })
                           ; break;
              case 'show': case 'edit': apiResponse = await this.getEventById(this.props.eventId)
                          this.setState({ events: apiResponse.data.event, isLoading: false })
                          ; break;
              case 'show-by-month': apiResponse = await this.getEventsByMonth(this.props.month)
                          this.setState({ events: apiResponse.data.events, isLoading: false })
                          ; break;

              default: this.setState({ isLoading: false }); break;
            }

          } catch(error){

             console.log('hocs error call',error.response.data); this.setState({ apiErrors: [error.response.data.message]})
          }

        }

        getAllEvents(){

          console.log('sto per fare la chiamata dal hoc, getAllEvents')

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
           url: `/api/admin/event/id/${eventId}`,
           method: 'get',
           headers: {
             'X-Requested-With': 'XMLHttpRequest',
             'Authorization' : 'Bearer ' + this.props.user.token},
           responseType: 'json',
         })

       }

        getEventsByMonth(month){

         return axios({
           url: `/api/admin/events/by-month/${month}`,
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
            method: 'events',
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
            method: 'events',
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
              'Authorization' : 'Bearer ' + token},
            responseType: 'json',
          })

       }


        render(){

          console.log('eventsConnector', this.props)

          if (this.state.apiErrors.length > 0)  return (<ErrorsAlert errors={this.state.apiErrors} />)

          //if (!this.state.isLoading && this.state.events.length === 0 ) return <ErrorsAlert errors={['No events found']} />

          return this.state.isLoading ? (<div>Loading data...</div>): <WrappedComponent {...this.state} {...this.props} deleteEvent={this.deleteEvent} updateEvent={this.updateEvent} submitEvent={this.submitEvent}  pagesAvailable={ ['Travel', 'Blog', 'Hotels']}/>

        }

    }
  })

export default EventConnector;
