import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import LocationCard from './LocationCard';
import LocationsList from './LocationsList';
import LocationShow from './LocationShow';
import LocationCreateEdit from './LocationCreateEdit';
import {withRouter } from 'react-router-dom';

const LocationsPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<LocationsList {...props} />)
      break;
    case 'show':
      contentArea = (<LocationShow {...props} locationId={props.match.params.id}/>)
      break;
    case 'create':
        contentArea = (<LocationCreateEdit {...props}/>)
      break;
    case 'edit':
        contentArea = (<LocationCreateEdit {...props} locationId={props.match.params.id}/>)
        break;
  default:
    contentArea = (<div>not chosen</div>)
  }

    return (
        <Fragment>
            {contentArea}
        </Fragment>
    );
}

export default withRouter(LocationsPage);
