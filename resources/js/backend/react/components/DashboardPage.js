import React, { Component, Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import NewsPage from './NewsPage';
import UsersPage from './UsersPage';
import Sidebar from './Sidebar';
import PagesManagementPage from './PagesManagementPage';


class DashboardPage extends Component {

  constructor(props) {

    super(props);

  }


  render() {

    let contentArea;

    switch(this.props.contentPage) {
    case 'main':
      contentArea = (<div>Main Content </div>)
      break;
    case 'users':
      contentArea = (<UsersPage user={this.props.user}/>)
      break;
    case 'news':
      contentArea = (<NewsPage user={this.props.user}/>)
      break;
    case 'pages':
      contentArea = (<PagesManagementPage user={this.props.user}/>)
      break;
    default:
      contentArea = (<div>not chosen</div>)
    }

    return (
      <Fragment>

        <Navbar />
        <div className="container-fluid d-flex" id="dashboard-page">

              <div className="row">

              <Sidebar />

                <div role="main" className="px-4">

                  <div className="pt-5">
                      {contentArea}
                  </div>

                </div>
              </div>
            </div>



      </Fragment>

    );
  }
}

export default DashboardPage;
