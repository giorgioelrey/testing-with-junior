import axios from 'axios';
import React, { Component } from "react";
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import ErrorsAlert from './../components/ErrorsAlert';

const AuthConnector = ((WrappedComponent) => {

    return class AuthManager extends Component {

      constructor(props) {
        super(props);

        this.state = {
          user: { token: this.props.token },
          errors: []
        };

        this.addUserDataAndtoken = this.addUserDataAndtoken.bind(this);
        this.logoutClicked = this.logoutClicked.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

      }

      addUserDataAndtoken(data){

        this.setState({ user: {...data.user, token: data.token} });

      }

      async submitLogin(fields, successCallback) {

          try {
               console.log('fields', fields);

               const { data } = await axios(axiosHelper.getLoginConfig(fields));

               console.log('login response.data ', data);

               this.setState({ user: data.user, redirectToReferrer: true });

             } catch(error) {

               console.log('login issues', error.response.data);

               this.setState({ errors: [error.response.data.errors]})

             }

       }

      //callbacks will be used in the descendant component
      async logoutClicked(token,successCallback, errorCallback){

        try {

          const {data} = await axios(axiosHelper.getLogoutConfig(this.state.token));

          this.setState({ isLoading: false, user: {token: null} });

        } catch(error){

          console.log(error.response.data);

          this.setState({ isLoading: false, errors: [error.response.data.message]});

        }

      }

      getLoginConfig({ email, password, password_confirmation }){

        //Data from the form
        const userData = { email, password, password_confirmation };

        //create string for axios
        const axiosData = Object.keys(userData).map((key) =>( encodeURIComponent(key) + '=' + encodeURIComponent(userData[key]))).join('&');

        //assemble the Axios Config
        const loginConfig = {
          url: '/api/admin/login',
          method: 'post',
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          data: axiosData,
          responseType: 'json',
        }

        return loginConfig;

      }

      getLogoutConfig(token){

      //assemble the Axios Config with token
        return {
          url: '/api/admin/logout',
          method: 'get',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization' : 'Bearer ' + token},
          responseType: 'json',
        }


    }

      render(){

        console.log('authConnector props', this.props);

        if (this.state.errors.length > 0) {return (<ErrorsAlert errors={this.state.apiErrors} />)};

        return this.state.user.token !== null
                                    ?
            <WrappedComponent user= {this.state.user} submitLogin={this.submitLogin} />
                                    :
            <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />

        }

      }

});

export default AuthConnector;
