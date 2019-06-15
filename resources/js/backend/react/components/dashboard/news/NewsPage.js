import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import PostCard from './PostCard';
import NewsList from './NewsList';
import NewsShow from './NewsShow';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';
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
        contentArea = (<NewsCreate {...props}/>)
      break;
    case 'edit':
        contentArea = (<NewsEdit {...props} postId={props.match.params.id}/>)
        break;
  default:
    contentArea = (<div>not chosen</div>)
  }

    return (
        <Fragment>
            {/*props.section*/}
            {contentArea}
        </Fragment>
    );

}

export default withRouter(NewsPage);
