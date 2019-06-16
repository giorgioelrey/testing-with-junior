import React, { Component, Fragment } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import Navbar from './dashboard/Navbar';
import DashboardPage from './dashboard/DashboardPage';

//Helpers
import * as axiosHelper from './../helpers/axiosHelper';

class App extends Component {

constructor(props){
  super(props);


  this.state = {
    user: {}
  }

  this.addUserDataAndtoken = this.addUserDataAndtoken.bind(this);
  this.logoutClicked = this.logoutClicked.bind(this);
}

addUserDataAndtoken(data){

  this.setState({ user: {...data.user, token: data.token} });

}

//callbacks will be used in the descendant component
async logoutClicked(token,successCallback, errorCallback){

  try {

    const {data} = await axios(axiosHelper.getLogoutConfig(token));

    this.setState({ user: {} });

  } catch(error){

    console.log(error.response.data);

    this.setState({ errors: [error.response.data.message]});

  }

}

  render() {

    const { user } = this.state;

    return (
      <Fragment>
        <main>
        <Switch>
          <Route
          exact path="/admin/"
          render={(props) => (<LoginPage {...props} setUserData={this.addUserDataAndtoken} />)}
          />
          {/* DashboardPage receives props to manage routing + the currentUser from the state */}
          <Route
          exact path="/admin/dashboard"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="main"/>)}
          />
          {/* DashboardPages receive props to manage routing + the currentUser from the state */}
          <Route
          exact path="/admin/dashboard/users"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="list"/>)}
          />
          <Route
          exact path="/admin/dashboard/news"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="news" section="list"/>)}
          />
          <Route
          exact path="/admin/dashboard/news/create"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="news" section="create" />)}
          />
          <Route
          path="/admin/dashboard/news/show/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="news" section="show" />)}
          />
          <Route
           path="/admin/dashboard/news/edit/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="news" section="edit" />)}
          />
          <Route
          exact path="/admin/dashboard/events"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="events" section="list"/>)}
          />
          <Route
          exact path="/admin/dashboard/events/create"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="events" section="create" />)}
          />
          <Route
          path="/admin/dashboard/events/show/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="events" section="show" />)}
          />
          <Route
           path="/admin/dashboard/events/edit/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="events" section="edit" />)}
          />
          <Route
          exact path="/admin/dashboard/pages"
          render={(props) => (<DashboardPage {...props} user={this.state.user} logoutAction={this.logoutClicked} contentPage="list" />)}
          />
          <Route to="/admin/dashboard/{*}" render={() => <Redirect to="/admin" />} />
          <Route render={() => <Redirect to="/admin" />} />
        </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
