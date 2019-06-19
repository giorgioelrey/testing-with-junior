import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import EventsList from './EventsList';
import EventsShow from './EventsShow';
import EventCreateEdit from './EventCreateEdit';
import {withRouter } from 'react-router-dom';

const EventsPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<EventsList {...props} />)
      break;
    case 'show':
      contentArea = (<EventsShow {...props} eventId={props.match.params.id}/>)
      break;
    case 'create':
        contentArea = (<EventCreateEdit {...props}/>)
      break;
    case 'edit':
        contentArea = (<EventCreateEdit {...props} eventId={props.match.params.id}/>)
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

export default withRouter(EventsPage);
