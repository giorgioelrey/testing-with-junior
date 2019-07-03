import React, { Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import NewsPage from './news/NewsPage';
import EventsPage from './events/EventsPage';
import Sidebar from './sidebar/Sidebar';
import PagesManagementPage from './pages/PagesManagementPage';

const DashboardPage = (props) => {


  const {user, match, history, location, section, contentPage} = props;
  console.log('dash props',props);

    let contentArea;

    switch(contentPage) {
    case 'main':
      contentArea = (<div>Main Content </div>)
      break;
    case 'news':
      contentArea = (<NewsPage {...props} />)
      break;
    case 'pages':
      contentArea = (<PagesManagementPage {...props}/>)
      break;
    case 'events':
      contentArea = (<EventsPage {...props}/>)
      break;
    default:
      contentArea = (<div>not chosen</div>)
    }

    return (
      <Fragment>

        <Navbar {...props} />
        <div className="container-fluid d-flex" id="dashboard-page">

              <Sidebar {...props} />

              <div className="container px-4 pt-5">

                  {contentArea}

              </div>

            </div>

      </Fragment>

    );

}

export default DashboardPage;
