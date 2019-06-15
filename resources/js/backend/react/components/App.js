import React, { Component, Fragment } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import Navbar from './dashboard/Navbar';
import DashboardPage from './dashboard/DashboardPage';

class App extends Component {

constructor(props){
  super(props);


  this.state = {
    user: {}
  }

  this.addUserDataAndtoken = this.addUserDataAndtoken.bind(this);

}

addUserDataAndtoken(user){

  this.setState({ user });
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
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="main"/>)}
          />
          <Route
          exact path="/admin/dashboard/main"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="main" />)}
          />
          {/* DashboardPages receive props to manage routing + the currentUser from the state */}
          <Route
          exact path="/admin/dashboard/users"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="list"/>)}
          />
          <Route
          exact path="/admin/dashboard/news"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="news" section="list"/>)}
          />
          <Route
          exact path="/admin/dashboard/news/create"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="news" section="create" />)}
          />
          <Route
          path="/admin/dashboard/news/show/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="news" section="show" />)}
          />
          <Route
           path="/admin/dashboard/news/edit/:id"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="news" section="edit" />)}
          />
          <Route
          exact path="/admin/dashboard/pages"
          render={(props) => (<DashboardPage {...props} user={this.state.user} contentPage="list" />)}
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
