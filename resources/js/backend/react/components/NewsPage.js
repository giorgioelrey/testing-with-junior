import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import PostCard from './PostCard';
import NewsList from './NewsList';
import NewsShow from './NewsShow';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';

const NewsPage = (props) => {


  const deleteSingleNews = (id) => {

    //axios call for deletion

  }

  let contentArea;

  switch(props.section) {

    case 'list':
      contentArea = (<NewsList user={props.user} />)
      break;
    case 'show':
      contentArea = (<NewsShow user={props.user} postId={props.match.params.id}/>)
      break;
    case 'create':
        contentArea = (<NewsCreate user={props.user}/>)
      break;
    case 'edit':
        contentArea = (<NewsEdit user={props.user} postId={props.match.params.id}/>)
  default:
    contentArea = (<div>not chosen</div>)
  }

    return (
        <Fragment>
            {props.section}
            {contentArea}
        </Fragment>
    );

}

export default NewsPage;
