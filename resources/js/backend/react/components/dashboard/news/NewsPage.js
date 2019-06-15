import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import PostCard from './PostCard';
import NewsList from './NewsList';
import NewsShow from './NewsShow';
import NewsCreateEdit from './NewsCreateEdit';
import {withRouter } from 'react-router-dom';

const NewsPage = (props) => {

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<NewsList {...props} />)
      break;
    case 'show':
      contentArea = (<NewsShow {...props} postId={props.match.params.id}/>)
      break;
    case 'create':
        contentArea = (<NewsCreateEdit {...props}/>)
      break;
    case 'edit':
        contentArea = (<NewsCreateEdit {...props} postId={props.match.params.id}/>)
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

export default withRouter(NewsPage);
