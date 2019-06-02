import React, { Component, Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
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

        <div className="container-fluid d-flex" id="dashboard-page">

              <div className="row">

              <Sidebar />

                <div role="main" className="px-4">

                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
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
