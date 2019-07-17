import React, { Component, Fragment } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import Navbar from './dashboard/Navbar';
import DashboardPage from './dashboard/DashboardPage';
import PrivateRoute from './auth/PrivateRoute';

//Helpers
import * as axiosHelper from './../helpers/axiosHelper';

class App extends Component {

constructor(props){

  super(props);

  this.state = { user: {token: this.props.localstoragetoken}, authErrors: [] };

  this.logoutClicked = this.logoutClicked.bind(this);
  this.loginClicked = this.loginClicked.bind(this);

}

//callbacks will be used in the descendant component
async logoutClicked(token,successCallback, errorCallback){

  try {

    const {data} = await axios(axiosHelper.getLogoutConfig(token));
    localStorage.removeItem('usertoken');
    this.setState({ user: {} });

  } catch(error){

    console.log(error.response.data);

    this.setState({ authErrors: [error.response.data.message]});

  }

}

async loginClicked(fields,successCallback, errorCallback) {

    try {
         console.log('fields', fields);

         const { data } = await axios(axiosHelper.getLoginConfig(fields));

         console.log('login response.data ', data.token);
         localStorage.setItem('usertoken', data.token);
         this.setState({user: {...data.user, token: data.token}}, () => {
           successCallback()

         })


       } catch(error) {

         console.log('login issues', error.response.data);

         this.setState({authErrors: [error.response.data.errors]}, () => {
           errorCallback()
         }
       )

    }

}

  render() {

    const { user } = this.state;

    console.log('gmapsApiKey', gmapsApiKey);

    console.log('localStorage token', this.props.localstoragetoken)

    return (
      <Fragment>
        <main>
        <Switch>
          <Route exact path="/admin/" render={(props) => (<LoginPage {...this.props} {...props} user={user} submitForm={this.loginClicked} errors={this.state.authErrors} />)} />
          {/* DashboardPage receives props to manage routing + the currentUser from the state */}
          <PrivateRoute
          exact path="/admin/dashboard"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="main"/>)}
          />
          {/* DashboardPages receive props to manage routing + the currentUser from the state */}
          <PrivateRoute
          exact path="/admin/dashboard/users"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="list"/>)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/news"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="news" section="list"/>)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/news/create"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="news" section="create" />)}
          />
          <PrivateRoute
          path="/admin/dashboard/news/show/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="news" section="show" />)}
          />
          <PrivateRoute
           path="/admin/dashboard/news/edit/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="news" section="edit" />)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/locations"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="locations" section="list"/>)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/locations/create"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="locations" section="create" />)}
          />
          <PrivateRoute
          path="/admin/dashboard/location/show/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="locations" section="show" />)}
          />
          <PrivateRoute
           path="/admin/dashboard/location/edit/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="locations" section="edit" />)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/events"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="events" section="list"/>)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/events/create"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="events" section="create" />)}
          />
          <PrivateRoute
          path="/admin/dashboard/event/show/id/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="events" section="show" />)}
          />
          <PrivateRoute
           path="/admin/dashboard/event/edit/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="events" section="edit" />)}
          />
          <PrivateRoute
          exact path="/admin/dashboard/pages"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="pages" section="list" />)}
          />
          <PrivateRoute
           path="/admin/dashboard/pages/edit/:id"
          component={DashboardPage} {...this.props} {...this.state} logoutAction={this.logoutClicked} contentPage="pages" section="edit" />)}
          />
          <PrivateRoute to="/admin/dashboard/{*}" render={() => <Redirect to="/admin" />} />
          <Route render={() => <Redirect to="/admin" />} />
        </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
