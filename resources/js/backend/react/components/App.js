import React, { Component, Fragment } from 'react';
import {Switch, Route, Link,Redirect} from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import Navbar from './dashboard/Navbar';
import DashboardPage from './dashboard/DashboardPage';

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
          render={(props) => (<DashboardPage {...props} contentPage="list" user={{name: 'test-user'}}/>)}
          />
          <Route
          exact path="/admin/dashboard/news"
          render={(props) => (<DashboardPage {...props} contentPage="news" section="list" user={{name: 'test-user'}} />)}
          />
          <Route
          exact path="/admin/dashboard/news/create"
          render={(props) => (<DashboardPage {...props} contentPage="news" section="create" user={{name: 'test-user'}} />)}
          />
          <Route
          path="/admin/dashboard/news/:id/show"
          render={(props) => (<DashboardPage {...props} contentPage="news" section="show" user={{name: 'test-user'}} />)}
          />
          <Route
           path="/admin/dashboard/news/:id/edit"
          render={(props) => (<DashboardPage {...props} contentPage="news" section="edit" user={{name: 'test-user'}} />)}
          />
          <Route
          exact path="/admin/dashboard/pages"
          render={(props) => (<DashboardPage {...props} contentPage="list" user={{name: 'test-user'}} />)}
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
