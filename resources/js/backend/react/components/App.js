import React, { Component, Fragment } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import DashboardPage from './DashboardPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main>
        <Switch>
          <Route
          exact path="/admin/"
          render={(props) => (<LoginPage {...props} />)}
          />
          {/* DashboardPage receives props to manage routing + the currentUser from the state */}
          <Route
          exact path="/admin/dashboard"
          render={(props) => (<DashboardPage {...props} contentPage="main" user={{name: 'test-user'}} />)}
          />
          <Route
          exact path="/admin/dashboard/main"
          render={(props) => (<DashboardPage {...props} contentPage="main" user={{name: 'test-user'}} />)}
          />
          {/* DashboardPages receive props to manage routing + the currentUser from the state */}
          <Route
          exact path="/admin/dashboard/users"
          render={(props) => (<DashboardPage {...props} contentPage="users" user={{name: 'test-user'}}/>)}
          />
          <Route
          exact path="/admin/dashboard/news"
          render={(props) => (<DashboardPage {...props} contentPage="news" user={{name: 'test-user'}} />)}
          />
          <Route
          exact path="/admin/dashboard/pages"
          render={(props) => (<DashboardPage {...props} contentPage="pages" user={{name: 'test-user'}} />)}
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
