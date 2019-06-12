import React, { Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import NewsPage from './news/NewsPage';
import UsersPage from './users/UsersPage';
import Sidebar from './sidebar/Sidebar';
import PagesManagementPage from './pages/PagesManagementPage';



const DashboardPage = ({user, section, contentPage}) => {

    let contentArea;

    switch(contentPage) {
    case 'main':
      contentArea = (<div>Main Content </div>)
      break;
    case 'users':
      contentArea = (<UsersPage user={user}/>)
      break;
    case 'news':
      contentArea = (<NewsPage user={user} section={section}/>)
      break;
    case 'pages':
      contentArea = (<PagesManagementPage user={user}/>)
      break;
    default:
      contentArea = (<div>not chosen</div>)
    }

    return (
      <Fragment>

        <Navbar />
        <div className="container-fluid d-flex" id="dashboard-page">

              <Sidebar />

              <div className="container px-4 pt-5">

                  {contentArea}

              </div>

            </div>

      </Fragment>

    );

}

export default DashboardPage;
